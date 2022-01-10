import React from 'react';
import Nav from './Nav'

function Header() {

    return (
        <div className="header">
            <h1 id="title">Nathan Piper <span id="title-desc">front-end web developer</span></h1>
            <Nav />
            <img className="navigation-arrow hide" src="https://img.icons8.com/ios/100/000000/expand-arrow--v1.png" />
        </div>
    );
}

export default Header;