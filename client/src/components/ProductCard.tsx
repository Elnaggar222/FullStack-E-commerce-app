import { Button, Card, HStack, Image, Text } from "@chakra-ui/react";
import ProductRating from "./ProductRating";
import { useColorMode } from "./ui/color-mode";
import { Link } from "react-router";
import { IProduct } from "../interfaces";
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
  const { colorMode } = useColorMode();

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
        <Button variant="ghost" _hover={{ bg: "green.600" }}>
          Add to cart
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
export default ProductCard;
