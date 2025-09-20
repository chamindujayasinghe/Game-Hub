import type { platforms } from "@/hooks/UseGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaAndroid,
  FaApple,
  FaXbox,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";

interface props {
  platform: platforms[];
}

function PlatformIconList({ platform }: props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    android: FaAndroid,
    playstation: FaPlaystation,
    mac: FaApple,
    xbox: FaXbox,
    linux: FaLinux,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginTop={2}>
        {platform.map((platform) => (
          <Icon
            as={iconMap[platform.slug]}
            color={"gray.500"}
            size={"md"}
            marginRight={1}
          />
        ))}
      </HStack>
    </>
  );
}

export default PlatformIconList;
