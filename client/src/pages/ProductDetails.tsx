import {
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Badge,
  Box,
} from "@chakra-ui/react";
import { useParams } from "react-router";
import ProductRating from "../components/ProductRating";
import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ErrorHandler from "../components/errors/ErrorHandler";
import { IErrorResponse, IProduct } from "../interfaces";
import ProductDetailsSkeleton from "../components/ProductDetailsSkeleton";
import axiosInstance from "../config/axios.config";
import { toaster } from "../components/ui/toaster";
import { useSelector } from "react-redux";
import { userAuthSelector } from "../app/features/AuthSlice";
import { useAppDispatch } from "../app/store";
import { addToCartAction } from "../app/features/LocalCart";

const ProductDetailsPage = () => {
  /*________________states_______________*/
  const queryClient = useQueryClient();
  const [isUpdating, setIsUpdating] = useState(false);
  const {
    loggedUser: { jwt },
  } = useSelector(userAuthSelector);
  const isLoggedIn = !!jwt;
  const dispatch = useAppDispatch();
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const { id } = useParams();

  /*________________react query_______________*/
  const { isLoading, error, data } = useQuery<
    IProduct,
    AxiosError<IErrorResponse>
  >({
    queryKey: ["Product", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/products/${id}?populate=*`);
      return data.data;
    },
    retry: 0,
  });

  // activeImgIndex in Dependency List => Reset and restart interval on image change
  // data.images in if condition => For Empty product images that is Null
  useEffect(() => {
    if (data && data.images) {
      const interval = setInterval(() => {
        setActiveImgIndex((prevIndex) => (prevIndex + 1) % data.images.length);
      }, 8000);

      return () => clearInterval(interval);
    }
  }, [activeImgIndex, data]);

  /*________________Handlers_______________*/
  // Handle clicking images
  const handleImageClick = (index: number) => {
    setActiveImgIndex(index);
  };

  const addToCart = async () => {
    //* Non-null Assertion Operator
    //data! => Tells TypeScript "I know this is not undefined"
    const ProductToAdd = data! && {
      product_id: data.documentId,
      title: data.title,
      price: data.price,
      rating: data.rating,
      discountPercentage: data.discountPercentage,
      quantity: 1,
      thumbnail: `${import.meta.env.VITE_SERVER_URL}${data.thumbnail.url}`,
    };
    if (!isLoggedIn) {
      dispatch(addToCartAction({ ...ProductToAdd }));
      return;
    }
    try {
      setIsUpdating(true);
      await axiosInstance.post(
        "/carts",
        { data: ProductToAdd },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      await queryClient.invalidateQueries({ queryKey: ["cart"] });
      setIsUpdating(false);
    } catch (error) {
      setIsUpdating(false);
      const errorData = error as AxiosError<IErrorResponse>;
      toaster.create({
        title: errorData?.response?.data.error.message
          ? `Failed To Add To Cart : ${errorData?.response?.data.error.message}`
          : "Failed To Add To Cart : SERVER ERROR",
        type: "error",
        duration: 1500,
      });
    }
  };

  if (isLoading) return <ProductDetailsSkeleton />;
  if (error)
    return (
      <ErrorHandler
        title={error.response?.data.error.message}
        statusCode={error.response?.data.error.status}
      />
    );
  return (
    <>
      {data ? (
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10} p={0}>
          {/* Product Images */}
          <HStack gap={3} align="start">
            {/* data.images && => For Empty product images that is Null */}
            {data.images && (
              <VStack gap={2}>
                {data.images.map(({ url }, idx) => (
                  <Image
                    key={idx}
                    src={`${import.meta.env.VITE_SERVER_URL}${url}`}
                    boxSize="80px"
                    borderRadius="md"
                    objectFit="cover"
                    cursor="pointer"
                    border={
                      activeImgIndex === idx ? "2px solid #4A90E2" : "none"
                    }
                    boxShadow={
                      activeImgIndex === idx
                        ? "0px 0px 10px rgba(74, 144, 226, 0.7)"
                        : "none"
                    }
                    onClick={() => handleImageClick(idx)}
                    transition="all 0.2s ease-in-out"
                  />
                ))}
              </VStack>
            )}
            {/* Chakra UI was caching the image component and not re-rendering it
        immediately causing the delay issue. */}
            {/*Using Key => Force re-render when index changes => forced React to treat it as a new element each time */}
            <Image
              key={activeImgIndex}
              // show product thumnail if have no images
              src={`${import.meta.env.VITE_SERVER_URL}${
                data.images
                  ? data.images[activeImgIndex].url
                  : data.thumbnail.url
              }`}
              alt={data.title}
              borderRadius="md"
              // handle image width in case there is product images or not
              w={data.images ? "calc(100% - (80px + 0.75rem))" : "100%"}
              h="300px"
              objectFit="center"
            />
          </HStack>

          {/* Product Details */}
          <VStack align="start">
            <Heading fontSize="3xl">{data.title}</Heading>
            <Text color="gray.500" mt={3} lineHeight={1.3}>
              {data.description}
            </Text>

            <HStack>
              {data.discountPercentage > 0 && (
                <Badge>{data.discountPercentage.toFixed(2)}% OFF</Badge>
              )}
              <Text fontSize="xl" fontWeight="bold" color="green.500">
                ${data.price.toFixed(2)}
              </Text>
              {data.discountPercentage > 0 && (
                <Text as="s" color="gray.500">
                  $
                  {(
                    data.price +
                    data.price * (data.discountPercentage / 100)
                  ).toFixed(2)}
                </Text>
              )}
            </HStack>

            <ProductRating rating={data.rating} size="24px" />

            <Box display="flex" mt={5}>
              <Text fontWeight="bold" color="purple.600">
                Stock:
              </Text>
              <Text ml={1.5} mr={1}>
                {data.stock}
              </Text>{" "}
              available
            </Box>
            <Box display="flex">
              <Text fontWeight="bold" color="purple.600">
                Category:
              </Text>
              <Text ml={1.5} mr={1}>
                {data.category.title}
              </Text>
            </Box>

            <HStack mt={3}>
              <Button
                size="md"
                _hover={{ bg: "green.600" }}
                onClick={addToCart}
                loading={isUpdating}
                loadingText="Adding…"
              >
                Add to Cart
              </Button>
              <Button size="md" _hover={{ bg: "red.600" }}>
                Buy Now
              </Button>
            </HStack>
          </VStack>
        </Grid>
      ) : null}
    </>
  );
};

export default ProductDetailsPage;
