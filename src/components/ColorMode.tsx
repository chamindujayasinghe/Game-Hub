import { HStack } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "./ui/color-mode";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <IconButton
        onClick={toggleColorMode}
        size="sm"
        bg={"black"}
        borderWidth={1}
        borderColor={"white"}
        color={"white"}
      >
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </HStack>
  );
}

export default ColorModeSwitch;
