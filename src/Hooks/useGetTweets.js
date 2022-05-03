import React, { useEffect, useState } from "react";
import { stringContains } from "../helpers";

export default function useGetTweets(pageNum) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [twitterKeywordList] = useState([
    "#100DaysOfCode",
    "#coding",
    "#webdevelopment",
    "#webdev",
  ]);
  const [nextToken, setNextToken] = useState(null);

  useEffect(() => {
    if (typeof pageNum == "number" && nextToken !== undefined) {
      let controller = new AbortController();
      setError(null);
      const fetchTweets = async () => {
        try {
          setLoading(true);
          const newPageUrl = new URLSearchParams({
            pagination_token: nextToken,
          });
          const res = await fetch(`/.netlify/functions/node-fetch?${nextToken ? newPageUrl : ''}`);
          const body = await res.json();
          const filteredTweets = body.data.filter((tweet) =>
            stringContains(tweet.text, twitterKeywordList)
          );
          setTweets((prevTweets) => [...prevTweets, ...filteredTweets]);
          setNextToken(body.meta.next_token);
          setLoading(false);
          return;
        } catch (err) {
          setError(err);
          setLoading(false);
          return;
        }
      };
      fetchTweets();
      return () => controller.abort();
    }
  }, [pageNum]);

  return { loading, error, tweets };
}
