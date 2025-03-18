import { Box, Flex, HStack, Skeleton, VStack } from "@chakra-ui/react";

const CartSkeleton = () => {
  return (
    <Box>
      {/* Heading Skeleton */}
      <Skeleton
        height="40px"
        width={{ base: "150px", md: "200px" }}
        mx="auto"
        my={4}
      />

      {/* Buttons Row Skeleton */}
      <Flex
        mt={8}
        justify="space-between"
        align="flex-start"
        gap={5}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Skeleton height="40px" width="180px" />
        <Skeleton height="40px" width="180px" />
      </Flex>

      {/* Main Content: Cart Items and Order Summary */}
      <Flex
        mt={10}
        justifyContent="space-between"
        flexDirection={{ base: "column-reverse", lg: "row" }}
        gap={5}
      >
        {/* Cart Items Skeleton */}
        <VStack flex={1} align="stretch">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Flex key={idx} align="center" justify="space-between">
              {/* Left Section: Image and Details */}
              <Flex
                alignItems={{ base: "flex-start", sm: "center" }}
                flexDirection={{ base: "column", sm: "row" }}
              >
                {/* Image Skeleton */}
                <Skeleton height="150px" width="150px" borderRadius="md" />

                {/* Details Skeleton */}
                <Box ml={{ base: 0, sm: 4 }} mt={{ base: 4, sm: 0 }}>
                  {/* Title Skeleton */}
                  <Skeleton
                    height="20px"
                    width={{ base: "80%", sm: "60%" }}
                    mb={2}
                  />
                  {/* Price, Discount & Rating HStack Skeleton */}
                  <HStack gap={1.5} align="center" mb={2}>
                    <Skeleton
                      height="20px"
                      width={{ base: "40px", md: "70px" }}
                    />
                    <Skeleton
                      height="20px"
                      width={{ base: "40px", md: "70px" }}
                    />
                    <Skeleton
                      height="20px"
                      width={{ base: "40px", md: "70px" }}
                    />
                  </HStack>
                  {/* Quantity Text Skeleton */}
                  <Skeleton height="20px" width="40%" />
                </Box>
              </Flex>

              {/* Right Section: Quantity & Actions */}
              <VStack>
                <HStack>
                  <Skeleton height="20px" width="30px" borderRadius="full" />
                  <Skeleton height="20px" width="30px" />
                  <Skeleton height="20px" width="30px" borderRadius="full" />
                </HStack>
                <Skeleton height="20px" width="30px" borderRadius="full" />
              </VStack>
            </Flex>
          ))}
        </VStack>

        {/* Order Summary Skeleton */}
        <Box
          alignSelf="flex-start"
          p={5}
          borderWidth="2px"
          borderRadius="md"
          width="350px"
          maxW={"100%"}
        >
          {/* Order Summary Heading Skeleton */}
          <Skeleton
            height="30px"
            width={{ base: "70%", md: "80%" }}
            mx="auto"
            mb={5}
          />
          {/* Subtotal HStack Skeleton */}
          <HStack justifyContent="space-between" mb={4}>
            <Skeleton height="20px" width="100px" />
            <Skeleton height="20px" width="60px" />
          </HStack>
          {/* Total Discount HStack Skeleton */}
          <HStack justifyContent="space-between" mb={4}>
            <Skeleton height="20px" width="120px" />
            <Skeleton height="20px" width="70px" />
          </HStack>
          {/* Total Price HStack Skeleton */}
          <HStack
            justifyContent="space-between"
            fontWeight="bold"
            mt={4}
            color="green.500"
            mb={4}
          >
            <Skeleton height="25px" width="130px" />
            <Skeleton height="25px" width="80px" />
          </HStack>
          {/* Action Buttons Skeletons */}
          <Skeleton mt={5} height="40px" width="full" />
          <Skeleton mt={3} height="40px" width="full" />
        </Box>
      </Flex>
    </Box>
  );
};

export default CartSkeleton;
