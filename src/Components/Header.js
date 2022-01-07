import React from 'react';
import HeaderMiddle from './HeaderMiddle'
import Nav from './Nav'

function Header() {

    return (
        <div className="header">
            <h1 id="title">Nathan Piper <span id="title-desc">front-end web developer</span></h1>
            <HeaderMiddle />
            <Nav />
        </div>
    );
}

export default Header;