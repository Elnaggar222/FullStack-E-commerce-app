import { Box, Text, Button, Icon } from "@chakra-ui/react";
import { GiShoppingCart } from "react-icons/gi";
import { useNavigate } from "react-router";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="60vh"
      textAlign="center"
    >
      <Icon as={GiShoppingCart} boxSize={16} color="gray.500" />
      <Text fontSize="xl" fontWeight="bold" mt={3}>
        Your Cart is Empty!
      </Text>
      <Text color="gray.500">
        Browse our products and add items to your cart.
      </Text>
      <Button mt={4} onClick={() => navigate("/")}>
        Continue Shopping
      </Button>
    </Box>
  );
};

export default EmptyCart;
