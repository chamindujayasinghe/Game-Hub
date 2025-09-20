import ApiClient from "@/services/Api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface platforms {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
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

  useEffect(() => {
    const controller = new AbortController();
    ApiClient.get<fetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      });
    return () => controller.abort();
  }, []);
  return { games, errors };
}

export default UseGames;
