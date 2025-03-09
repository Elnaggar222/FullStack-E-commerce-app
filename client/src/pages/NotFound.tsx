import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router";
import { useColorMode } from "../components/ui/color-mode";

const NotFoundPage = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      width="100vw"
      height="100vh"
      position="fixed"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={colorMode === "dark" ? "#0a1a1b" : "white"}
    >
      <VStack gap={0} textAlign="center">
        <Heading
          fontSize="100px"
          lineHeight="1"
          fontWeight="bold"
          color="purple.600"
        >
          404
        </Heading>
        <Text fontSize={"2xl"} fontWeight="bold">
          <Text as="span" color="red.500" mr={2}>
            Oops!
          </Text>
          Page not found
        </Text>
        <Text fontSize={"md"}>The page you’re looking for doesn’t exist.</Text>
        <Link to={"/"}>
          <Button mt={6}>Go Home</Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default NotFoundPage;
