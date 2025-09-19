import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorMode";

function NavBar() {
  return (
    <HStack justifyContent={"space-between"} padding={"5px 20px"}>
      <Image src={logo} boxSize={"20"} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
