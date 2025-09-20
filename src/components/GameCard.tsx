import type { Game } from "@/hooks/UseGames";
import { CardBody, CardRoot, CardTitle, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface props {
  game: Game;
}

function GameCard({ game }: props) {
  return (
    <CardRoot borderRadius={10} overflow="hidden" margin={4}>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <CardTitle fontSize="md">{game.name}</CardTitle>
        <PlatformIconList
          platform={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </CardRoot>
  );
}

export default GameCard;
