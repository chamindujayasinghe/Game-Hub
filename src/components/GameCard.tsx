import type { Game } from "@/hooks/UseGames";
import { CardRoot, CardTitle, Image, AspectRatio } from "@chakra-ui/react";

interface props {
  game: Game;
}

function GameCard({ game }: props) {
  return (
    <CardRoot borderRadius={10} overflow="hidden" margin={4}>
      <Image src={game.background_image} alt={game.name} />
      <CardTitle fontSize="md">{game.name}</CardTitle>
    </CardRoot>
  );
}

export default GameCard;
