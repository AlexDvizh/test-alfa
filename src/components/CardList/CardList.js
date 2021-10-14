import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../store/cardReducer';
import Card from '../Card/Card';
import Favorite from '../Favorite/Favoruite';
import Filter from '../Filter/Filter';
import './CardList.css';

function CardList(props) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked)
  }


  return (
    <>
      <div className="filter">
          <input 
              type="checkbox" 
              checked={checked}
              onChange={handleChange}
          ></input>
          <p className="filter__text">{checked ? "Показать все карточки" : "Показать лайкнутые карточки"}</p>
      </div>
      <section className="card-list">
          <div className="card-list__wrap">
              {props.cards.map((card, index) => (
                card.isLiked 
                ? <Card 
                  url={card.image}
                  name={card.name}
                /> 
                : <Card 
                  card={card}
                  key={index}
                  index={index}
                  url={card.image}
                  name={card.name}
                  id={card.id}
                  like={card.isLiked}
                  checked={checked}
                  remove={() => props.removeCard(card)}
                  />
              ))}
          </div>
      </section>
    </>
  );
}

export default CardList;
