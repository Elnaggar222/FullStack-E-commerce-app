import { Box, Icon, Stack } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useColorMode } from "./ui/color-mode";
import { NavLinks } from "../data";
import NavItem from "./NavItem";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { userAuthSelector } from "../app/features/AuthSlice";

interface IProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}
const NavMenu = ({ open, onClose, onOpen }: IProps) => {
  /**_________________States___________________ */
  const { colorMode } = useColorMode();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const {
    loggedUser: { jwt },
  } = useSelector(userAuthSelector);
  const isLoggedIn = !!jwt;

  // Function to close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    if (open) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      //React runs the cleanup function before re-running the effect when dependencies change.
      //Event listener is removed when the menu is closed.
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open, onClose]);

  return (
    <>
      <Box
        ref={menuRef}
        cursor={"pointer"}
        display={{ md: "none" }}
        onClick={(e) => {
          e.stopPropagation();
          if (open) {
            onClose();
          } else {
            onOpen();
          }
        }}
        transition="transform 0.3s ease"
        transform={open ? "rotate(180deg)" : "rotate(0deg)"}
      >
        {open ? (
          <Icon as={IoClose} boxSize={6} />
        ) : (
          <Icon as={GiHamburgerMenu} boxSize={5} />
        )}
      </Box>
      <Box
        ref={menuRef}
        position={"absolute"}
        w={"full"}
        left={0}
        top={"100%"}
        display={{ md: "none" }}
        px={2}
        bg={
          colorMode === "dark"
            ? "linear-gradient(90deg, rgba(10,26,27,1) 0%, rgba(22,50,50,1) 50%, rgba(22,50,50,1) 54%, rgba(10,26,27,1) 100%);"
            : "gray.50"
        }
        transition="opacity 0.3s ease, transform 0.3s ease"
        opacity={open ? 1 : 0}
        transform={open ? "translateY(0)" : "translateY(-20px)"}
        pointerEvents={open ? "auto" : "none"} // Prevents interaction when hidden(Prevents clicking the hidden menu)
      >
        <Stack as={"nav"}>
          {!isLoggedIn && (
            <>
              <NavItem to={"/signIn"} name={"Sign In"} />
              <NavItem to={"/signUp"} name={"Sign Up"} />
            </>
          )}
          {NavLinks.map(({ name, to }) => (
            <NavItem key={name} to={to} name={name} />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default NavMenu;
