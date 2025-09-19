import React, { useEffect, useState } from "react";
import ApiClient from "@/services/Api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface fetchGamesResponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    ApiClient.get<fetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setErrors(err.message));
  });
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
