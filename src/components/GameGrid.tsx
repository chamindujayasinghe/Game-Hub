import { Text } from "@chakra-ui/react";
import UseGames from "@/hooks/UseGames";

function GameGrid() {
  const { errors, games } = UseGames();
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
