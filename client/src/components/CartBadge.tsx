import { Badge, Flex, Icon, Spinner } from "@chakra-ui/react";
import { GiShoppingCart } from "react-icons/gi";
import { useNavigate } from "react-router";
import useCustomQuery from "../hooks/useCustomQuery";
import { IUserProfile, IErrorResponse } from "../interfaces";
import { AxiosError } from "axios";
import { useSelector } from "react-redux";
import { userAuthSelector } from "../app/features/AuthSlice";
import { toaster } from "./ui/toaster";
import { useEffect, useRef } from "react";

const CartBadge = () => {
  /*________________States_______________ */
  // Ref to ensure the error toast is shown only once per hook instance
  const hasShownError = useRef(false);
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

  // ✅ Calculate cart item count safely
  const itemCount =
    data?.carts?.reduce((acc, item) => {
      return acc + +item.quantity;
    }, 0) || 0;

  useEffect(() => {
    if (error && !hasShownError.current) {
      hasShownError.current = true;
      // Extract error data from the response if available
      const errorData = error.response?.data as IErrorResponse | undefined;
      toaster.create({
        title: errorData?.error.message
          ? `Failed To Fetch Cart Items : ${errorData.error.message}`
          : "Failed To Fetch Cart Items : SERVER ERROR",
        type: "error",
        duration: 1500,
      });
    }
  }, [error]);
  return (
    <Flex position="relative">
      <Icon
        onClick={() => navigate("/cart")}
        cursor={"pointer"}
        as={GiShoppingCart}
        boxSize={6}
        transition="opacity 0.3s, transform 0.3s"
        opacity={0.9}
        _hover={{ transform: "scale(1.2)", opacity: 1 }}
      />

      <Badge
        position="absolute"
        top="-65%"
        right="-50%"
        bg="red.500"
        color="white"
        fontSize="xs"
        borderRadius="full"
      >
        {isLoading ? <Spinner size="sm" /> : itemCount}
      </Badge>
    </Flex>
  );
};

export default CartBadge;
