import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { isVisibleEvent, stringContains } from "../helpers";
import useGetTweets from "../Hooks/useGetTweets";
import Tweet from "./Tweet";

export default function Socials() {
  const [pageNum, setPageNum] = useState(0);
  const [twitterListScroll, setTwitterListScroll] = useState(null);
  const [tweetElements, setTweetElements] = useState([]);
  const { loading, error, tweets } = useGetTweets(pageNum);
  const twitterContainer = useRef();
  const lastTweetElement = useRef();

  const observer = useRef();
  const lastTweetObserver = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNum((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    if (tweets.length) {
      createTweetElements();
    }
  }, [loading]);

  // useEffect(() => {
  //   console.log("called");
  //   if (tweetElements && lastTweetElement.current) {
  //     console.log(lastTweetElement)
  //     isVisibleEvent(
  //       lastTweetElement.current,
  //       (visible, observer) => {
  //         if (visible) {
  //           console.log("visible");
  //           setPageNum((prevPage) => prevPage + 1);
  //           observer.unobserve(lastTweetElement.current);
  //         }
  //       }
  //     );
  //   }
  // }, [lastTweetElement, loading]);

  const createTweetElements = () => {
    const listLength = tweets.length;
    const tweetEls = tweets.map((tweet, index) => {
      return (
        <div className="tweet__container" ref={index === tweets.length-1 ? lastTweetObserver : null} key={tweet.id}>
          <Tweet       
            tweetObject={tweet}
            setNewPage={setPageNum}
            index={tweets.indexOf(tweet)}
            listLength={listLength}
          />
        </div>
      );
    });
    setTweetElements(tweetEls);
  };

  return (
    <AnimationOnScroll
      className="socials"
      animateIn="fade-in"
      duration={0.5}
      offset={200}
      animateOnce={true}
    >
      <h2 id="socials" className="socials__title">
        Socials
      </h2>
      <div className="socials__body">
        <div className="socials__twitter">
          <div className="tweets__list" ref={twitterContainer}>
            {tweetElements}
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
}
