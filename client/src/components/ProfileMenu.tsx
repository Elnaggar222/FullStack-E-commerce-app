import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { logoutAction, userAuthSelector } from "../app/features/AuthSlice";
import { useAppDispatch } from "../app/store";

const ProfileMenu = () => {
  /*_______________States________________ */
  const dispatch = useAppDispatch();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const {
    loggedUser: {
      user: { username },
    },
  } = useSelector(userAuthSelector);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }

    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      //React runs the cleanup function before re-running the useEffect when dependencies change.
      //Event listener is removed when the menu is closed.
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen]);

  return (
    <Box position="relative" ref={menuRef}>
      {/* Profile Button */}
      <Image
        cursor="pointer"
        boxSize="35px"
        borderRadius="full"
        src="https://avatars.dicebear.com/api/male/username.svg"
        alt="User Avatar"
        onClick={() => setIsProfileOpen((prev) => !prev)}
        transition="transform 0.3s ease-in-out"
        _hover={{ transform: "scale(1.1)" }}
      />

      {/* Animated Dropdown Content */}
      <Box
        position="absolute"
        top="45px"
        right={0}
        bg="white"
        boxShadow="md"
        borderRadius="md"
        w="200px"
        p={4}
        zIndex={10}
        _dark={{ bg: "#0e2323" }}
        transition="opacity 0.3s ease, transform 0.3s ease"
        opacity={isProfileOpen ? 1 : 0}
        transform={isProfileOpen ? "translateY(0)" : "translateY(-10px)"}
        pointerEvents={isProfileOpen ? "auto" : "none"} // Prevents interaction when hidden(Prevents clicking the hidden menu)
      >
        {/* User Info */}
        <Flex direction="column" align="center" mb={3}>
          <Image
            boxSize="70px"
            borderRadius="full"
            src="https://avatars.dicebear.com/api/male/username.svg"
            alt="User Avatar"
          />
          <Text fontWeight="bold" mt={2}>
            {username || "username"}
          </Text>
        </Flex>

        <Box
          borderBottom="1px solid"
          borderColor="gray.200"
          _dark={{ borderColor: "gray.600" }}
        />

        {/* Menu Items */}
        <Text
          mt={3}
          p={2}
          borderRadius="md"
          cursor="pointer"
          color="red.500"
          fontWeight="bold"
          _hover={{ bg: "red.100" }}
          _dark={{ _hover: { bg: "red.600", color: "white" } }}
          onClick={() => dispatch(logoutAction())}
        >
          Logout
        </Text>
      </Box>
    </Box>
  );
};

export default ProfileMenu;
