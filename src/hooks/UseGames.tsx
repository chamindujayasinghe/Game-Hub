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

const UseGames = () => UseData<Game>("/games");

export default UseGames;
