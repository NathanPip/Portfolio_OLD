import React, { useCallback, useEffect, useRef, useState } from "react";

export default function Tweet(tweetObject) {
  const textElement = useRef();
  const observer = useRef();
  const tweetObserver = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        console.log(entries);
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add("fade-in")
        }
      });
      if (node) observer.current.observe(node);
    },
    []
  );

  useEffect(() => {
    let tweet = tweetObject.tweetObject;
    if (tweet) {
      textElement.current.innerHTML = tweet.text.replace(/\n/g, "<br />");
    }
  }, [tweetObject]);


  return (
    <div
      className="socials__tweet"
      ref={tweetObserver}
    >
      <img
        className="tweet__profile__img"
        src="/imgs/profile.jpg"
        href="https://twitter.com/NathanPiperr"
        target="_blank"
      ></img>
      <h3 className="tweet__username">
        <a href="https://twitter.com/NathanPiperr" target="_blank">
          Nathan Piper
        </a>
        <span className="tweet__user__handle">
          <a href="https://twitter.com/NathanPiperr" target="_blank">
            @NathanPiperr
          </a>
        </span>
      </h3>
      <p className="tweet__text" ref={textElement}></p>
    </div>
  );
}
