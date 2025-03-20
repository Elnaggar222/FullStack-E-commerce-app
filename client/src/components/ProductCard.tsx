import { Button, Card, HStack, Image, Text } from "@chakra-ui/react";
import ProductRating from "./ProductRating";
import { useColorMode } from "./ui/color-mode";
import { Link } from "react-router";
import { IErrorResponse, IProduct } from "../interfaces";
import axiosInstance from "../config/axios.config";
import { useSelector } from "react-redux";
import { userAuthSelector } from "../app/features/AuthSlice";
import { useQueryClient } from "@tanstack/react-query";
import { toaster } from "./ui/toaster";
import { AxiosError } from "axios";
import { useState } from "react";
import { useAppDispatch } from "../app/store";
import { addToCartAction } from "../app/features/LocalCartSlice";
interface IProps {
  product: IProduct;
}
const ProductCard = ({
  product: {
    documentId,
    description,
    title,
    rating,
    price,
    discountPercentage,
    thumbnail: { url },
  },
}: IProps) => {
  /*________________states_______________*/
  const queryClient = useQueryClient();
  const [isUpdating, setIsUpdating] = useState(false);
  const { colorMode } = useColorMode();
  const dispatch = useAppDispatch();
  const {
    loggedUser: { jwt },
  } = useSelector(userAuthSelector);
  const isLoggedIn = !!jwt;
  /* ________________Handlers_______________*/
  const addToCartHandler = async () => {
    const data = {
      product_id: documentId,
      title,
      price,
      rating,
      discountPercentage,
      quantity: 1,
      thumbnail: `${import.meta.env.VITE_SERVER_URL}${url}`,
    };
    if (!isLoggedIn) {
      dispatch(addToCartAction({ ...data }));
      return;
    }
    try {
      setIsUpdating(true);
      await axiosInstance.post(
        "/carts",
        { data },
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
  return (
    <Card.Root
      overflow="hidden"
      bg={colorMode === "dark" ? "#0e2323" : "gray.50"}
      border={"none"}
      boxShadow="5px 5px 10px rgba(0, 0, 0, 0.1) ,-5px 0px 10px rgba(0, 0, 0, 0.1)"
      borderRadius={"md"}
    >
      <Image
        src={`${import.meta.env.VITE_SERVER_URL}${url}`}
        alt={title}
        objectFit="center"
        w="full"
        h="200px"
      />
      <Card.Body gap="2" justifyContent={"space-between"}>
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
        <HStack gap={1.5}>
          <Text
            color="green.600"
            textStyle="2xl"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2"
          >
            ${price.toFixed(2)}
          </Text>
          {discountPercentage > 0 && (
            <Text
              color="red.500"
              textStyle="sm"
              letterSpacing="tight"
              mt="2"
              textDecoration={"line-through"}
            >
              ${(price + price * (discountPercentage / 100)).toFixed(2)}
            </Text>
          )}
          <ProductRating rating={rating} />
        </HStack>
      </Card.Body>
      <Card.Footer gap="2">
        <Link to={`/product/${documentId}`}>
          <Button variant="solid">View Details</Button>
        </Link>
        <Button
          variant="ghost"
          _hover={{ bg: "green.600" }}
          onClick={addToCartHandler}
          loading={isUpdating}
          loadingText="Adding…"
        >
          Add to cart
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
export default ProductCard;
