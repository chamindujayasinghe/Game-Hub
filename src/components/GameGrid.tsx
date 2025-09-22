import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGames from "@/hooks/UseGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { errors, games, isLoading } = UseGames();
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid padding={10} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {isLoading &&
          Skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
