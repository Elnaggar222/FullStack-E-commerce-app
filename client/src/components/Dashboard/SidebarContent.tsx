import { Box, BoxProps, Text } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { adminNavLinks } from "../../data";
import NavItem from "../NavItem";

const SidebarContent = ({ ...rest }: BoxProps) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      transition="3s ease"
      bg={colorMode === "dark" ? "#0a1a1b" : "white"}
      borderRight={{
        base: "none",
        md: `1px solid ${colorMode === "dark" ? "#3f3f46" : "#e4e4e7"}`,
      }}
      w={{ base: "xs", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Text
        display={{ base: "none", md: "flex" }}
        mt={7}
        mb={5}
        mx="8"
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Amazon+
      </Text>
      {adminNavLinks.map((link) => (
        <NavItem
          key={link.name}
          name={link.name}
          to={link.to}
          icon={link.icon}
          style={{ p: 4, mx: 4, my: 2 }}
        />
      ))}
    </Box>
  );
};
export default SidebarContent;
