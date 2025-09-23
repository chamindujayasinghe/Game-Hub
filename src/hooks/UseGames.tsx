import UseData from "./UseData";
import type { Genre } from "./UseGenres";

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

const UseGames = (selectedGenre: Genre | null) =>
  UseData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default UseGames;
