import React, { useEffect, useState } from "react";

export default function useGetTweets() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    let controller = new AbortController();
    setError(null);
    const fetchTweets = async () => {
    try{
      const res = await fetch(
        "/.netlify/functions/node-fetch"
      );
      const body = await res.json();
      setTweets(body.data);
      setLoading(false);
      return
    } catch (err) {
        setError(err)
        setLoading(false)
        return
    }
    };
    fetchTweets();
    return () => controller.abort();
  }, []);

  return { loading, error, tweets };
}
