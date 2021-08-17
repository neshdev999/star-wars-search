import React, { Component } from 'react';
import "./Header.css";
import dstar from "./images/web_logo/star_wars_search_horizontal_white.png";

/* Header */

class Header extends Component {

    render() {
        return (
            <div className="titleHeaderContainer">
                <div className="titleHeader">
                    <img src={dstar} alt="star wars logo in white letters"/>
                </div>
            </div>
        );
    }
}

export default Header;