import { Button, Icon } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { IoMoon, IoSunny } from "react-icons/io5";

const ModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      onClick={toggleColorMode}
      bg={"transparent"}
      p={0}
      transition="opacity 0.3s, transform 0.3s"
      opacity={0.9}
      _hover={{ transform: "scale(1.2)", opacity: 1 }}
    >
      {colorMode === "light" ? (
        <Icon as={IoMoon} color="black" />
      ) : (
        <Icon as={IoSunny} color="white" />
      )}
    </Button>
  );
};

export default ModeButton;
