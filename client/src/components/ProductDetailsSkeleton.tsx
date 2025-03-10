import {
  Grid,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "./ui/skeleton";

const ProductDetailsSkeleton = () => {
  return (
    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10} p={0}>
      {/* Product Images Skeleton */}
      <HStack gap={3} align="start">
        <VStack gap={2}>
          {Array.from({ length: 3 }).map((_, idx) => (
            <Skeleton key={idx} boxSize="80px" borderRadius="md" />
          ))}
        </VStack>
        <Skeleton borderRadius="md" w="calc(100% - 80px)" h="300px" />
      </HStack>

      {/* Product Details Skeleton */}
      <VStack align="start">
        <SkeletonText noOfLines={1}  mb={3} height="20px" width="80%" />
        <SkeletonText noOfLines={3} height="20px" width="100%" />

        <HStack>
          <Skeleton height="30px" width="60px" borderRadius="md" />
          <Skeleton height="30px" width="80px" borderRadius="md" />
          <Skeleton height="30px" width="80px" borderRadius="md" />
        </HStack>

        <Skeleton height="30px" width="120px" borderRadius="md" />

          <Skeleton height="20px" width="160px" mt={5} />

          <Skeleton height="20px" width="160px" />

        <HStack mt={3}>
          <Skeleton height="40px" width="100px" borderRadius="md" />
          <Skeleton height="40px" width="100px" borderRadius="md" />
        </HStack>
      </VStack>
    </Grid>
  );
};

export default ProductDetailsSkeleton;
