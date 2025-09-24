import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGames, { type platforms } from "@/hooks/UseGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { Genre } from "@/hooks/UseGenres";

interface props {
  selectedGenre: Genre | null;
  selectedPlatform: platforms | null;
}

function GameGrid({ selectedGenre, selectedPlatform }: props) {
  const { errors, data, isLoading } = UseGames(selectedGenre, selectedPlatform);
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {isLoading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
