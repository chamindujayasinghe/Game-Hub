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

export interface props {
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
  const filteredPlatforms = platform.filter((p) => iconMap[p.slug]);
  return (
    <>
      <HStack>
        {filteredPlatforms.map((platform) => (
          <Icon
            as={iconMap[platform.slug]}
            color={"gray.500"}
            size={"sm"}
            marginRight={"2px"}
            key={platform.id}
          />
        ))}
      </HStack>
    </>
  );
}

export default PlatformIconList;
