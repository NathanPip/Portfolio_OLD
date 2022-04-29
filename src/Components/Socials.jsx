import React, { useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import useGetTweets from "../Hooks/useGetTweets";

export default function Socials() {
  const {loading, error, tweets} = useGetTweets();

  

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
        <div className="socials__twitter"></div>
      </div>
    </AnimationOnScroll>
  );
}
