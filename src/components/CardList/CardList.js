import { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import './CardList.css';

function CardList(props) {

  console.log(props.cards.cards)

  return (
    <section className="card-list">
        <div className="card-list__wrap">
            {/* {props.cards.cards.map((card) => (
                <Card 
                key={card.id}
                url={card.image}
                name={card.name}
                id={card.id}
                />
            ))} */}
        </div>
    </section>
  );
}

export default CardList;
