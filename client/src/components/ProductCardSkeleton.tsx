import { Card, HStack } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { Skeleton, SkeletonText } from "./ui/skeleton";

const ProductSkeleton = () => {
  const { colorMode } = useColorMode();

  return (
    <Card.Root
      overflow="hidden"
      bg={colorMode === "dark" ? "#0e2323" : "gray.50"}
      border={"none"}
      boxShadow="5px 5px 10px rgba(0, 0, 0, 0.1) ,-5px 0px 10px rgba(0, 0, 0, 0.1)"
      borderRadius={"md"}
    >
      <Skeleton height="200px" width="full" />
      <Card.Body gap="2" justifyContent={"space-between"}>
        <Skeleton height="20px" width="70%" mb={"2"} />
        <SkeletonText noOfLines={3} />
        <HStack gap={1.5} mt="2">
          <Skeleton height="20px" width="50px" />
          <Skeleton height="20px" width="40px" />
          <Skeleton height="20px" width="100px" />
        </HStack>
      </Card.Body>
      <Card.Footer gap="2">
        <Skeleton height="40px" width="100px" borderRadius="md" />
        <Skeleton height="40px" width="100px" borderRadius="md" />
      </Card.Footer>
    </Card.Root>
  );
};

export default ProductSkeleton;
