//^ using Chakra Templates
import { Box, Flex, HStack, useDisclosure } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import ProfileMenu from "./ProfileMenu";
import NavMenu from "./NavMenu";
import NavItem from "./NavItem";
import { userNavLinks } from "../data";
import { useSelector } from "react-redux";
import { userAuthSelector } from "../app/features/AuthSlice";
import CartBadge from "./CartBadge";
import ModeButton from "./ModeButton";

const Navbar = () => {
  /*_________________States___________________ */
  const { open, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    loggedUser: { jwt },
  } = useSelector(userAuthSelector);
  const isLoggedIn = !!jwt;
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
            <Box
              fontSize={"3xl"}
              fontWeight={"bold"}
              cursor={"pointer"}
              fontFamily="monospace"
            >
              Amazon+
            </Box>
          </Link>
          <HStack as={"nav"} display={{ base: "none", md: "flex" }}>
            {userNavLinks.map(({ name, to }) => (
              <NavItem key={name} to={to} name={name} />
            ))}
          </HStack>
        </HStack>
        <Box display={"flex"} alignItems={"center"}>
          {isLoggedIn ? (
            <ProfileMenu />
          ) : (
            <Box display={{ base: "none", md: "flex" }} alignItems={"center"}>
              <NavItem to={"/signIn"} name={"Sign In"} />
              <NavItem to={"/signUp"} name={"Sign Up"} />
            </Box>
          )}
          <ModeButton />
          <CartBadge />
        </Box>
      </Flex>
    </Box>
  );
};
export default Navbar;
