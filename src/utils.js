import { useState, useEffect } from "react";
import { movies$ } from "./data/movies";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await movies$;
        // console.log(data);
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { isLoading, data, setData, error };
};
