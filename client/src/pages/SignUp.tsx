import {
  Box,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  Grid,
  GridItem,
  Field,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { useColorMode, useColorModeValue } from "../components/ui/color-mode";
import { InputGroup } from "../components/ui/input-group";
import { Link } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignUpSchema } from "../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { getFormSignUpFields } from "../data";
import { useAppDispatch } from "../app/store";
import { getUserAuth, userAuthSelector } from "../app/features/AuthSlice";
import { IFormSignUpInfo } from "../interfaces";
import { useSelector } from "react-redux";

const SignUp = () => {
  /*________________states_______________*/
  const { isLoading } = useSelector(userAuthSelector);
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const boxBg = useColorModeValue("white", "#0a1a1b");
  const { colorMode } = useColorMode();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSignUpInfo>({ resolver: yupResolver(SignUpSchema) });
  /* _______________Handlers_______________________ */
  const onSubmit: SubmitHandler<IFormSignUpInfo> = async (data) => {
    dispatch(getUserAuth({ userInfo: data, type: "signUp" }));
  };
  /* _______________Renders_______________________ */
  const renderFields = getFormSignUpFields(showPassword).map(
    ({ name, type, label, icon, placeholder, hasToggle }, idx) => (
      <Field.Root key={idx} invalid={!!errors[name]?.message}>
        <Text fontSize={"sm"}>{label}</Text>
        <Box position="relative" w="full">
          <InputGroup width="full" startElement={icon}>
            <Input
              type={type}
              {...(!errors[name] && {
                borderColor: colorMode === "dark" ? "#0a1a1b" : "gray.200",
                outlineColor:
                  colorMode === "dark" ? "gray.300" : "blackAlpha.600",
              })}
              placeholder={placeholder}
              {...register(name)}
            />
          </InputGroup>
          {hasToggle && (
            <Button
              bg="transparent"
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
          )}
        </Box>
        <Field.ErrorText>{errors[name]?.message}</Field.ErrorText>
      </Field.Root>
    )
  );
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
              Join Us & Start Shopping
            </Heading>
          </Stack>
          <Box
            as={"form"}
            rounded="lg"
            boxShadow="lg"
            p={8}
            bg={colorMode === "dark" ? "#0e2323" : "gray.50"}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Stack gap={4}>
              {renderFields}
              <Button
                size="lg"
                bg="green.600"
                color="white"
                _hover={{ bg: "green.500" }}
                type="submit"
                loading={isLoading}
                loadingText="Almost There..."
              >
                Sign up
              </Button>
              <Box display={"flex"} justifyContent={"center"}>
                Already a user?
                <Text
                  ml={1}
                  color={"green.400"}
                  _hover={{ textDecoration: "underline" }}
                >
                  <Link to="/signIn">Login</Link>
                </Text>
              </Box>
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

export default SignUp;
