import { useEffect, useState } from "react";
import ApiClient from "@/services/Api-client";
import { CanceledError } from "axios";

interface fetchResponse<T>{
    count:number;
    results:T[];
}

const data = <T>(endpoint:string) => {
    const [data, setData] = useState<T[]>([]);
      const [errors, setErrors] = useState("");
      const [isLoading, setLoading] = useState(false);
    
      useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        ApiClient.get<fetchResponse<T>>(endpoint, { signal: controller.signal })
          .then((res) => {
            setData(res.data.results);
            setLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setErrors(err.message);
            setLoading(false);
          });
        return () => controller.abort();
      }, []);
      return { data, errors, isLoading };
}

export default data