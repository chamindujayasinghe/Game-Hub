import type { GameQuery } from "@/App";
import UseData from "./UseData";

export interface platforms {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  metacritic: number;
  background_image: string;
  id: number;
  name: string;
  parent_platforms: { platform: platforms }[];
}

const UseGames = (gameQuery: GameQuery) =>
  UseData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genres?.id,
        platforms: gameQuery.platforms?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default UseGames;
