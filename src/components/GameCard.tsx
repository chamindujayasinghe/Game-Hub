import type { Game } from "@/hooks/UseGames";
import { CardBody, CardRoot, CardTitle, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import MetacriticScore from "./MetacriticScore";
import ImageUrl from "@/services/ImageUrl";

interface props {
  game: Game;
}

function GameCard({ game }: props) {
  return (
    <CardRoot borderRadius={10} overflow="hidden" margin={3}>
      <Image src={ImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <CardTitle fontSize="md">{game.name}</CardTitle>
        <HStack marginTop={2} justifyContent={"space-between"}>
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <MetacriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </CardRoot>
  );
}

export default GameCard;
