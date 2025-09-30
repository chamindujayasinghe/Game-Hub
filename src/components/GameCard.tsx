import type { Game } from "@/hooks/UseGames";
import { Card, HStack, Image, AspectRatio } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import MetacriticScore from "./MetacriticScore";
import ImageUrl from "@/services/ImageUrl";
import Emoji from "./Emoji";

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
        <HStack wrap={"wrap"} mb={3} justifyContent="space-between">
          <PlatformIconList
            platform={game.parent_platforms
              .map((p) => p.platform)
              .filter((p) => p.slug !== "neo-geo" && p.slug !== "3do")}
          />
          <MetacriticScore score={game.metacritic} />
        </HStack>
        <Card.Title fontSize="md">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
