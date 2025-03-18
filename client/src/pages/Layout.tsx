import { Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { useColorMode } from "../components/ui/color-mode";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      minHeight={"100vh"}
      h={"fit-content"}
      bg={colorMode === "dark" ? "#0a1a1b" : "white"}
      pb={40}
      pt={1}
    >
      <Container
        maxW={{
          base: "100%",
          sm: "95%", //(min-width >= 480px)
          md: "90%", //(min-width >= 768px)
          lg: "90%", //(min-width >= 1024px)
          xl: "90%", //(min-width >= 1280px)
        }}
      >
        <Box position={"fixed"} top={0} left={0} zIndex={1} w={"100%"}>
          <Navbar />
        </Box>
        <Box position={"relative"} top={"70px"}>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
};

export default MainLayout;
