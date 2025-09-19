import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGames from "@/hooks/UseGames";
import GameCard from "./GameCard";

function GameGrid() {
  const { errors, games } = UseGames();
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid padding={10} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
