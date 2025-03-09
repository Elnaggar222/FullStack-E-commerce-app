//^ using Chakra Templates
import {
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { IoSunny, IoMoon, IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Links = [
  { name: "Products", to: "/products" },
  { name: "Contact", to: "/contact" },
  { name: "About", to: "/about" },
];
const NavLink = ({ name, to }: { name: string; to: string }) => {
  return (
    <Link to={to}>
      <Box
        fontSize={"md"}
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          bg: useColorModeValue("gray.200", "#163838"),
        }}
        cursor={"pointer"}
      >
        {name}
      </Box>
    </Link>
  );
};

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
      >
        <Box
          cursor={"pointer"}
          display={{ md: "none" }}
          onClick={open ? onClose : onOpen}
        >
          {open ? <IoClose size={25} /> : <GiHamburgerMenu size={25} />}
        </Box>
        <HStack alignItems={"center"}>
          <Box fontSize={"2xl"} fontWeight={"bold"} cursor={"pointer"}>
            Amazon+
          </Box>
          <HStack as={"nav"} display={{ base: "none", md: "flex" }}>
            {Links.map(({ name, to }) => (
              <NavLink key={name} to={to} name={name} />
            ))}
          </HStack>
        </HStack>
        <Button onClick={toggleColorMode} bg={"transparent"} p={0}>
          {colorMode === "light" ? (
            <IoMoon color="black" />
          ) : (
            <IoSunny color="white" />
          )}
        </Button>
      </Flex>
      {open ? (
        <Box
          display={{ md: "none" }}
          px={2}
          bg={
            colorMode === "dark"
              ? "linear-gradient(90deg, rgba(10,26,27,1) 0%, rgba(22,50,50,1) 50%, rgba(22,50,50,1) 54%, rgba(10,26,27,1) 100%);"
              : "gray.50"
          }
        >
          <Stack as={"nav"}>
            {Links.map(({ name, to }) => (
              <NavLink key={name} to={to} name={name} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
export default Navbar;
