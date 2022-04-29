import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                        src="/images/tech.png"
                        text="My tech projects!"
                        label="Tech"
                        path="/tech"
                    />
                    <CardItem
                        src="/images/guitar.jpg"
                        text="My guitar videos!"
                        label="Music"
                        path="/music"
                    />
                    <CardItem
                        src="/images/travel.jpg"
                        text="My travel footsteps!"
                        label="Travel"
                        path="/travel"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;