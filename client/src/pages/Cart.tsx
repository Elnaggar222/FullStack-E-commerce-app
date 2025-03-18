import {
  Box,
  Button,
  Text,
  Heading,
  Flex,
  HStack,
  VStack,
  Separator,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

import EmptyCart from "../components/EmptyCart";
import { IUserProfile, IErrorResponse } from "../interfaces";
import { AxiosError } from "axios";
import { useSelector } from "react-redux";
import { userAuthSelector } from "../app/features/AuthSlice";
import useCustomQuery from "../hooks/useCustomQuery";
import CartSkeleton from "../components/CartSkeleton ";
import ErrorHandler from "../components/errors/ErrorHandler";
import CartItem from "../components/CartItem";
import { calculateSummary } from "../utils/functions";

const CartPage = () => {
  /*________________States_______________ */
  const navigate = useNavigate();
  const {
    loggedUser: { jwt },
  } = useSelector(userAuthSelector);

  /*________________react query_______________*/
  const { data, isLoading, error } = useCustomQuery<
    IUserProfile,
    AxiosError<IErrorResponse>
  >({
    queryKey: ["cart"],
    url: `/users/me?populate=*`,
    config: {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
  });

  /*________________Handlers_______________ */
  /*________________renders_______________ */
  const renderCart = data?.carts.map((cartItem) => (
    <CartItem key={cartItem.documentId} cartItem={cartItem} />
  ));
  if (isLoading) return <CartSkeleton />;
  if (error) {
    const errorData = error.response?.data as IErrorResponse | undefined;
    return (
      <ErrorHandler
        title={errorData?.error.message}
        statusCode={errorData?.error.status}
      />
    );
  }
  const carts = data?.carts || [];
  const { subtotal, totalDiscount, totalPrice } = calculateSummary(carts);
  return (
    <Box>
      <Heading textAlign="center" color="green.600">
        Your Bag
      </Heading>
      {data && data.carts && data.carts.length > 0 ? (
        <>
          <Flex
            mt={8}
            justify={"space-between"}
            align={"flex-start "}
            gap={5}
            flexDirection={{ base: "column", sm: "row" }}
          >
            <Button
              w="180px"
              onClick={() => navigate("/")}
              variant="outline"
              _hover={{ bg: "black", color: "white" }}
              _dark={{ _hover: { bg: "white", color: "black" } }}
            >
              CONTINUE SHOPPING
            </Button>
            <Button variant="solid" w="180px">
              CHECKOUT NOW
            </Button>
          </Flex>
          <Flex
            mt={10}
            justifyContent="space-between"
            flexDirection={{ base: "column-reverse", lg: "row" }}
            gap={5}
          >
            <VStack flex={1} align={"stretch"}>
              {renderCart}
            </VStack>
            <Box
              alignSelf={"flex-start"}
              p={5}
              borderWidth={2}
              borderRadius="md"
            >
              <Heading size="md" textAlign="center" mb={3}>
                ORDER SUMMARY
              </Heading>
              <HStack justifyContent="space-between" mb={4}>
                <Text>Subtotal</Text>
                <Text>${subtotal.toFixed(2)}</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text>Total Discount</Text>
                <Text color="red.600">-${totalDiscount.toFixed(2)}</Text>
              </HStack>
              <Separator my={4} />
              <HStack
                justifyContent="space-between"
                fontWeight="bold"
                color={"green.500"}
              >
                <Text>Total Price</Text>
                <Text>${totalPrice.toFixed(2)}</Text>
              </HStack>
              <Button mt={4} w="full">
                CHECKOUT NOW
              </Button>
              <Button
                mt={3}
                w="full"
                bg="red.600"
                color={"white"}
                _hover={{ bg: "red.500" }}
              >
                CLEAR CART
              </Button>
            </Box>
          </Flex>
        </>
      ) : (
        <EmptyCart />
      )}
    </Box>
  );
};

export default CartPage;
