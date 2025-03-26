import {
  Box,
  Drawer,
  Flex,
  HStack,
  Icon,
  Portal,
  Text,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import ProfileMenu from "../ProfileMenu";
import SidebarContent from "./SidebarContent";
import ModeButton from "../ModeButton";

const MobileNav = () => {
  /*_________________States___________________ */
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "#0a1a1b")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
    >
      {/* Mobile Sidebar Trigger using the new Drawer API */}
      <Drawer.Root placement={"start"} size={"xs"}>
        <Drawer.Trigger asChild>
          <Box
            cursor={"pointer"}
            display={{ base: "block", md: "none" }}
            transition="opacity 0.3s, transform 0.3s"
            opacity={0.9}
            _hover={{ transform: "scale(1.2)", opacity: 1 }}
          >
            <Icon as={GiHamburgerMenu} boxSize={5} />
          </Box>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content bg={useColorModeValue("white", "#0a1a1b")}>
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                px={8}
                py={6}
              >
                <Drawer.Title
                  fontSize="2xl"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  Amazon+
                </Drawer.Title>
                <Drawer.CloseTrigger asChild>
                  <Box
                    cursor={"pointer"}
                    transition="opacity 0.3s, transform 0.3s"
                    opacity={0.9}
                    _hover={{ transform: "scale(1.2)", opacity: 1 }}
                  >
                    <Icon as={IoClose} boxSize={6} />
                  </Box>
                </Drawer.CloseTrigger>
              </Flex>
              <Drawer.Body p="0">
                {/* Pass your SidebarContent into the Drawer */}
                <SidebarContent />
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Amazon+
      </Text>

      <HStack gap={0}>
        <Box display={"flex"} alignItems={"center"}>
          <ProfileMenu />
          <ModeButton />
        </Box>
      </HStack>
    </Flex>
  );
};
export default MobileNav;
