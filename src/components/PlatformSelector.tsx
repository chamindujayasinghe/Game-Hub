import type { GameQuery } from "@/App";
import type { platforms } from "@/hooks/UseGames";
import UsePlatforms from "@/hooks/UsePlatforms";
import { Button, Portal, Text } from "@chakra-ui/react";
import { Menu } from "@chakra-ui/react/menu";
import { BsChevronDown } from "react-icons/bs";

interface props {
  onSelectedPlatform: (platform: platforms) => void;
  gameQuery: GameQuery;
}

const PlatformSelector = ({ onSelectedPlatform, gameQuery }: props) => {
  const { data } = UsePlatforms();
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button display={"flex"} justifyContent={"space-between"}>
          <Text>{gameQuery.platforms?.name || "platforms"}</Text>
          <BsChevronDown size={4} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((i) => (
              <Menu.Item
                onClick={() => onSelectedPlatform(i)}
                value={i.slug}
                key={i.id}
              >
                {i.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
