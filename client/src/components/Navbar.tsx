//^ using Chakra Templates
import { Box, Button, Flex, HStack, useDisclosure } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import ProfileMenu from "./ProfileMenu";
import NavMenu from "./NavMenu";
import NavItem from "./NavItem";
import { NavLinks } from "../data";

const Navbar = () => {
  /*_________________States___________________ */
  const { open, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Box
      transition={"all 0.3s"}
      {...(isScrolled
        ? {
            bg:
              colorMode === "dark"
                ? "linear-gradient(90deg, rgba(10,26,27,1) 0%, rgba(22,50,50,1) 50%, rgba(22,50,50,1) 54%, rgba(10,26,27,1) 100%);"
                : "gray.50",
            py: 1,
          }
        : { bg: "transparent", py: 0 })}
      {...(open && {
        bg:
          colorMode === "dark"
            ? "linear-gradient(90deg, rgba(10,26,27,1) 0%, rgba(22,50,50,1) 50%, rgba(22,50,50,1) 54%, rgba(10,26,27,1) 100%);"
            : "gray.50",
      })}
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={6}
        position={"relative"}
      >
        <NavMenu open={open} onClose={onClose} onOpen={onOpen} />
        <HStack alignItems={"center"}>
          <Link to={"/"}>
            <Box fontSize={"2xl"} fontWeight={"bold"} cursor={"pointer"}>
              Amazon+
            </Box>
          </Link>
          <HStack as={"nav"} display={{ base: "none", md: "flex" }}>
            {NavLinks.map(({ name, to }) => (
              <NavItem key={name} to={to} name={name} />
            ))}
          </HStack>
        </HStack>
        <Box display={"flex"} alignItems={"center"}>
          <Button
            onClick={toggleColorMode}
            bg={"transparent"}
            p={0}
            transition="opacity 0.3s, transform 0.3s"
            opacity={0.9}
            _hover={{ transform: "scale(1.2)", opacity: 1 }}
          >
            {colorMode === "light" ? (
              <IoMoon color="black" />
            ) : (
              <IoSunny color="white" />
            )}
          </Button>
          <ProfileMenu />
        </Box>
      </Flex>
    </Box>
  );
};
export default Navbar;
