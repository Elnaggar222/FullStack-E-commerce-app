import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { TbServerCog } from "react-icons/tb";
import { Link, useLocation } from "react-router";
import { useColorMode } from "../ui/color-mode";
interface IProps {
  statusCode?: number;
  title?: string;
}

const ErrorHandler = ({ statusCode = 500, title = "SEVER ERROR" }: IProps) => {
  /*________________states_______________*/
  const { colorMode } = useColorMode();
  const { pathname } = useLocation();

  return (
    <Box
      position="fixed"
      left="50%"
      top="50%"
      transform="translate(-50%, -50%)"
      textAlign="center"
      color={colorMode === "dark" ? "rgba(255, 255, 255, 0.7)" : "gray.800"}
    >
      <VStack>
        <Box display="inline-flex" borderRadius="full" bg="red.200" p={4}>
          <Box borderRadius="full" bg="red.300" p={4}>
            <TbServerCog stroke="rgb(218, 7, 7)" size={40} />
          </Box>
        </Box>

        <Heading fontWeight={"bold"} size="3xl" mt={5}>
          {statusCode} - {title}
        </Heading>
        <Text fontSize="md">
          Oops! Something went wrong. Try refreshing this page or <br />
          feel free to contact us if the problem persists.
        </Text>

        <Box display="flex" gap={4} mt={5}>
          <Link to={"/"} reloadDocument>
            <Button>Home</Button>
          </Link>
          <Link to={pathname} reloadDocument>
            <Button>Refresh</Button>
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};

export default ErrorHandler;
