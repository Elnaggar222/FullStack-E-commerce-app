import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router";
import { useColorModeValue } from "./ui/color-mode";


const NavItem = ({ name, to }: { name: string; to: string }) => {
  const navBgColor = useColorModeValue("gray.200", "#163838");
  return (
    <NavLink to={to}>
      {/* NavLink provides an isActive function that returns true if the link is currently active*/}
      {({ isActive }) => (
        <Box
          fontSize={"md"}
          px={3}
          py={2}
          rounded={"md"}
          cursor={"pointer"}
          transition="all 0.3s"
          bg={isActive ? navBgColor : "transparent"} // Active background color Link
          _hover={{
            bg: navBgColor,
          }}
        >
          {name}
        </Box>
      )}
    </NavLink>
  );
};
export default NavItem;
