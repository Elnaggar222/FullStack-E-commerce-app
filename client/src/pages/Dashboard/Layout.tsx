import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "../../components/ui/color-mode";
import SidebarContent from "../../components/Dashboard/SidebarContent";
import MobileNav from "../../components/Dashboard/MobileNav";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <Box minH="100vh" bg={useColorModeValue("white", "#0a1a1b")}>
      {/* Desktop Sidebar */}
      <SidebarContent display={{ base: "none", md: "block" }} />

      {/* Mobile Navigation including the Drawer */}
      <MobileNav />

      {/* Main Content */}
      <Box
        ml={{ base: 0, md: 60 }}
        width={{ md: "calc(100vw - 16rem)" }}
        overflow={"auto"}
      >
        {/* Content goes here */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
