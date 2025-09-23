import type { Game } from "@/hooks/UseGames";
import { Card, HStack, Image, AspectRatio } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import MetacriticScore from "./MetacriticScore";
import ImageUrl from "@/services/ImageUrl";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root>
      <AspectRatio ratio={16 / 9}>
        <Image
          src={ImageUrl(game.background_image)}
          alt={game.name}
          objectFit="cover"
        />
      </AspectRatio>
      <Card.Body>
        <Card.Title fontSize="md">{game.name}</Card.Title>
        <HStack marginTop={2} justifyContent="space-between">
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <MetacriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
