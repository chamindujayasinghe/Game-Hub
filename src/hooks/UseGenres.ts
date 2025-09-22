import { useEffect, useState } from "react";
import ApiClient from "@/services/Api-client";
import { CanceledError } from "axios";

interface Genre{
    id:number;
    name:string;
}
interface fetchGenreResponse{
    count:number;
    results:Genre[];
}

const UseGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
      const [errors, setErrors] = useState("");
      const [isLoading, setLoading] = useState(false);
    
      useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        ApiClient.get<fetchGenreResponse>("/games", { signal: controller.signal })
          .then((res) => {
            setGenres(res.data.results);
            setLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setErrors(err.message);
            setLoading(false);
          });
        return () => controller.abort();
      }, []);
      return { genres, errors, isLoading };
}

export default UseGenres