import React, { useEffect, useRef, useState } from "react";
import { isVisibleEvent } from "../helpers";

export default function Tweet(tweetObject, setNewPage, index, listLength) {
  const textElement = useRef();

  useEffect(() => {
    let tweet = tweetObject.tweetObject;
    if (tweet) {
      textElement.current.innerHTML = tweet.text.replace(/\n/g, "<br />");
    }
  }, [tweetObject]);

  // useEffect(() => {
  //   console.log(tweetObject)
  //   console.log(setNewPage)
  //   console.log(index)
  //   console.log(listLength)
  //   if (listLength) {
  //     if (index === listLength - 1) {
  //       console.log("exists");
  //       isVisibleEvent(textElement, (visible, observer) => {
  //         if (visible) {
  //           console.log("visible")
  //           setNewPage((prevPage) => prevPage + 1);
  //           observer.unobserve(textElement);
  //         }
  //       });
  //     }
  //   }
  // }, [listLength]);

  return (
    <div className="socials__tweet">
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
