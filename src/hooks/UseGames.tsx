import ApiClient from "@/services/Api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

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

interface fetchGamesResponse {
  count: number;
  results: Game[];
}

function UseGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    ApiClient.get<fetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { games, errors, isLoading };
}

export default UseGames;
