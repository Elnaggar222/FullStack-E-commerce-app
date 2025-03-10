import {
  Box,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { useColorMode, useColorModeValue } from "../components/ui/color-mode";
import { InputGroup } from "../components/ui/input-group";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const SignIn = () => {
  /*________________states_______________*/
  const [showPassword, setShowPassword] = useState(false);
  const boxBg = useColorModeValue("white", "#0a1a1b");
  const { colorMode } = useColorMode();

  return (
    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} minH="100vh">
      {/* Left Side: Form */}
      <GridItem
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={8}
        bg={boxBg}
      >
        <Stack maxW="lg" w="full">
          <Stack align="center">
            <Heading fontSize="3xl" textAlign="center" mb={6}>
              Sign in to your account
            </Heading>
          </Stack>
          <Box
            rounded="lg"
            boxShadow="lg"
            p={8}
            bg={colorMode === "dark" ? "#0e2323" : "gray.50"}
          >
            <Stack gap={4}>
              <Box>
                <Text mb="1" fontSize={"sm"}>
                  Email address
                </Text>
                <InputGroup width={"full"} startElement={<MdEmail />}>
                  <Input
                    borderColor={colorMode === "dark" ? "#0a1a1b" : "gray.200"}
                    outlineColor={
                      colorMode === "dark" ? "gray.300" : "blackAlpha.600"
                    }
                    type="text"
                    placeholder="Email"
                  />
                </InputGroup>
              </Box>
              <Box>
                <Text mb="1" fontSize={"sm"}>
                  Password
                </Text>
                <Box position="relative">
                  <InputGroup width={"full"} startElement={<FaLock />}>
                    <Input
                      borderColor={
                        colorMode === "dark" ? "#0a1a1b" : "gray.200"
                      }
                      outlineColor={
                        colorMode === "dark" ? "gray.300" : "blackAlpha.600"
                      }
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                    />
                  </InputGroup>
                  <Button
                    bg={"transparent"}
                    variant="ghost"
                    onClick={() => setShowPassword((prev) => !prev)}
                    position="absolute"
                    top="50%"
                    right="0.5rem"
                    transform="translateY(-50%)"
                    size="sm"
                  >
                    {showPassword ? <IoEye /> : <IoEyeOffSharp />}
                  </Button>
                </Box>
              </Box>
              <Stack pt={2}>
                <Button
                  size="lg"
                  bg="green.600"
                  // bg="green.600"
                  color="white"
                  _hover={{ bg: "green.500" }}
                  type="submit"
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </GridItem>
      {/* Right Side: Image */}
      <GridItem
        display={{ base: "none", md: "block" }}
        bgImage={`url(${
          import.meta.env.VITE_SERVER_URL
        }/uploads/pexels_n_voitkevich_6214470_3d7cd2f7e1.jpg)`}
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
      />
    </Grid>
  );
};

export default SignIn;
