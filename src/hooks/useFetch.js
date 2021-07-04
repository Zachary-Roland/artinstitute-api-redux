import { useState, useEffect } from "react";

const baseUrl =
  // Base url for running an AIC search:
  "https://api.artic.edu/api/v1/artworks/search?q="; // If all of them go to something like https://www.omdb.api this would go there
export default function useFetch(url) {
  // This hook uses state management AND hooks
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setData(null);
    if (url.length < 3) {
      setError("Search must be at least 3 characters long!");
      return;
    }
    async function callAPI() {
      setLoading(true);
      try {
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();

          setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        console.log(e);
        setError("Something went wrong. Please try again later");
      } finally {
        setLoading(false);
      }
    }
    callAPI();
  }, [url]);

  return { data, error, loading };
}
