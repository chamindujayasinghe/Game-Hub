import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorMode";
import SearchInput from "./SearchInput";

interface props {
  onSearchInput: (searchInput: string) => void;
}

function NavBar({ onSearchInput }: props) {
  return (
    <HStack padding={"5px 20px"}>
      <Image src={logo} boxSize={"20"} />
      <SearchInput onSearchInput={onSearchInput} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
