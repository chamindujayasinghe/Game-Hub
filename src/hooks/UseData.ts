import { useEffect, useState } from "react";
import ApiClient from "@/services/Api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";

interface fetchResponse<T>{
    count:number;
    results:T[];
}

const data = <T>(endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[]) => {
    const [data, setData] = useState<T[]>([]);
      const [errors, setErrors] = useState("");
      const [isLoading, setLoading] = useState(false);
    
      useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        ApiClient.get<fetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
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
      },deps ? [...deps] : []);
      return { data, errors, isLoading };
}

export default data;