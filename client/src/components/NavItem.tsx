import { Box, Icon, SystemStyleObject } from "@chakra-ui/react";
import { NavLink } from "react-router";
import { useColorModeValue } from "./ui/color-mode";
import { IconType } from "react-icons";

const NavItem = ({
  name,
  to,
  icon,
  style,
}: {
  name: string;
  to: string;
  icon?: IconType;
  style?: SystemStyleObject;
}) => {
  const navBgColor = useColorModeValue("gray.200", "#163838");
  return (
    <NavLink to={to} end>
      {/* NavLink provides an isActive function that returns true if the link is currently active*/}
      {({ isActive }) => (
        <Box
          display={"flex"}
          alignItems={"center"}
          fontSize={"sm"}
          px={3}
          py={2}
          rounded={"md"}
          cursor={"pointer"}
          transition="all 0.3s"
          bg={isActive ? navBgColor : "transparent"} // Active background color Link
          _hover={{
            bg: navBgColor,
          }}
          {...style}
        >
          {icon && (
            <Icon
              mr="2"
              fontSize="16"
              width={4}
              height={4}
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {name}
        </Box>
      )}
    </NavLink>
  );
};
export default NavItem;
