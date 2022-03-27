import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
        <h1>My newest updates in each area:</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                {/* Each ul defines a horizontal line of items */}
                <ul className="cards__items">
                    <CardItem
                        src="/images/logo.jpg"
                        text="My first guitar video!"
                        label="Music"
                        path="/music"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;