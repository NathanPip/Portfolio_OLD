import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <div className="header">
      <div className="title-container">
        <h1 id="title">
          Nathan Piper <span id="title-desc">front-end web developer</span>
        </h1>
      </div>
      <Nav />
      <p className="scroll-down">
        scroll <span>down</span>
      </p>
    </div>
  );
}

export default Header;
