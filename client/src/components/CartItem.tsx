import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { ICart, IErrorResponse } from "../interfaces";
import axiosInstance from "../config/axios.config";
import { toaster } from "../components/ui/toaster";
import ProductRating from "../components/ProductRating";
import { FaTrashAlt } from "react-icons/fa";
import { GrFormSubtract, GrFormAdd } from "react-icons/gr";
import { useState } from "react";
import { userAuthSelector } from "../app/features/AuthSlice";
import { useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useAppDispatch } from "../app/store";
import {
  decreaseQuantityAction,
  increaseQuantityAction,
  removeItemAction,
} from "../app/features/LocalCartSlice";

interface IProps {
  cartItem: ICart;
}

const CartItem = ({
  cartItem: {
    documentId,
    product_id,
    title,
    discountPercentage,
    price,
    quantity,
    rating,
    thumbnail,
  },
}: IProps) => {
  /*________________States_______________ */
  const queryClient = useQueryClient();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isIncrementing, setIsIncrementing] = useState(false);
  const [isDecrementing, setIsDecrementing] = useState(false);
  // On small screens (base), the star size is 17px.
  // On medium & larger screens (md+), it uses 20px.
  const ratingSize = useBreakpointValue({ base: "17px", md: "20px" });
  const {
    loggedUser: { jwt },
  } = useSelector(userAuthSelector);
  const isLoggedIn = !!jwt;
  const dispatch = useAppDispatch();
  /*________________Handlers_______________ */
  const handleRemove = async () => {
    if (!isLoggedIn) {
      dispatch(removeItemAction(product_id));
      return;
    }
    setIsDeleting(true);
    try {
      await axiosInstance.delete(`/carts/${documentId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      await queryClient.invalidateQueries({ queryKey: ["cart"] });
      setIsDeleting(false);
    } catch (error) {
      setIsDeleting(false);
      const errorData = error as AxiosError<IErrorResponse>;
      toaster.create({
        title: errorData?.response?.data.error.message
          ? `Failed To delete Item : ${errorData?.response?.data.error.message}`
          : "Failed To delete Item : SERVER ERROR",
        type: "error",
        duration: 1500,
      });
    }
  };
  const handleQuantityIncrement = async (prevQuantity: number) => {
    if (!isLoggedIn) {
      dispatch(increaseQuantityAction(product_id));
      return;
    }
    setIsIncrementing(true);
    try {
      await axiosInstance.put(
        `/carts/${documentId}`,
        { data: { quantity: prevQuantity + 1 } },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      await queryClient.invalidateQueries({ queryKey: ["cart"] });
      setIsIncrementing(false);
    } catch (error) {
      setIsIncrementing(false);
      const errorData = error as AxiosError<IErrorResponse>;
      toaster.create({
        title: errorData?.response?.data.error.message
          ? `Failed To delete Item : ${errorData?.response?.data.error.message}`
          : "Failed To delete Item : SERVER ERROR",
        type: "error",
        duration: 1500,
      });
    }
  };
  const handleQuantityDecrement = async (prevQuantity: number) => {
    if (prevQuantity - 1 < 1) {
      return;
    }
    if (!isLoggedIn) {
      dispatch(decreaseQuantityAction(product_id));
      return;
    }
    setIsDecrementing(true);
    try {
      await axiosInstance.put(
        `/carts/${documentId}`,
        { data: { quantity: prevQuantity - 1 < 1 ? 1 : prevQuantity - 1 } },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      await queryClient.invalidateQueries({ queryKey: ["cart"] });
      setIsDecrementing(false);
    } catch (error) {
      setIsDecrementing(false);
      const errorData = error as AxiosError<IErrorResponse>;
      toaster.create({
        title: errorData?.response?.data.error.message
          ? `Failed To delete Item : ${errorData?.response?.data.error.message}`
          : "Failed To delete Item : SERVER ERROR",
        type: "error",
        duration: 1500,
      });
    }
  };

  return (
    <Flex align="center" justify={"space-between"}>
      <Flex
        alignItems={{ base: "flex-start", sm: "center" }}
        flexDirection={{ base: "column", sm: "row" }}
        gap={2}
      >
        <Image
          boxSize="150px"
          borderRadius="md"
          src={thumbnail}
          alt="Product Image"
        />
        <Box>
          <Heading size="md" fontWeight="bold">
            {title}
          </Heading>
          <HStack gap={1.5} align={"center"}>
            <Text
              color="green.600"
              textStyle="xl"
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
            <ProductRating rating={rating} size={ratingSize} />
          </HStack>
          <Box display="flex">
            <Text color="purple.600">quantity:</Text>
            <Text ml={1.5}>{quantity}</Text>
          </Box>
        </Box>
      </Flex>
      <VStack>
        <HStack>
          <Button
            size={"xs"}
            width={"10px"}
            height={"10px"}
            background={"none"}
            color={"black"}
            _dark={{ color: "white" }}
            transition="opacity 0.3s, transform 0.3s"
            opacity={0.9}
            _hover={{ transform: "scale(1.3)", opacity: 1 }}
            disabled={quantity == 1}
            _disabled={{ opacity: 0.4 }}
            onClick={() => handleQuantityDecrement(+quantity)}
            loading={isDecrementing}
            _loading={{ opacity: 1, color: "red" }}
          >
            <Icon
              color={"black"}
              _dark={{ color: "white" }}
              as={GrFormSubtract}
              boxSize={6}
            />
          </Button>
          <Text>{quantity}</Text>
          <Button
            size={"xs"}
            width={"10px"}
            height={"10px"}
            background={"none"}
            color={"black"}
            _dark={{ color: "white" }}
            transition="opacity 0.3s, transform 0.3s"
            opacity={0.9}
            _hover={{ transform: "scale(1.3)", opacity: 1 }}
            _disabled={{ opacity: 0.4 }}
            onClick={() => handleQuantityIncrement(+quantity)}
            loading={isIncrementing}
            _loading={{ opacity: 1, color: "red" }}
          >
            <Icon
              color={"black"}
              _dark={{ color: "white" }}
              as={GrFormAdd}
              boxSize={6}
            />
          </Button>
        </HStack>
        <IconButton
          aria-label="remove item"
          rounded="full"
          onClick={handleRemove}
          loading={isDeleting}
        >
          <FaTrashAlt />
        </IconButton>
      </VStack>
    </Flex>
  );
};

export default CartItem;
