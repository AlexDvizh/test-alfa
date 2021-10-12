import './Card.css';
import img from '../../images/2fz7vzD6Fy0.jpg'
import { useState } from 'react';

function Card(props) {
  const [like, setLike] = useState(false);
  const [card, setCard] = useState([]);

  const isLike = () => {
    if(like === false) {
      setLike(true);
    } else {
      setLike(false);
    }
  }

  return (
    <div className="card">
        <img className="card__img" src={props.url} alt="Фото персонажа"></img>
        <div className="card__content">
            <p className="card__text">{props.name}</p>
            <div className="card__buttons-wrap">
              <button className={`card__button card__button_like ${like ? 'card__button_like_active' : ''}`} onClick={isLike}></button>
              <button className="card__button card__button_delete" onClick={props.onClick}></button>
            </div>
        </div>
    </div>
  );
}

export default Card;