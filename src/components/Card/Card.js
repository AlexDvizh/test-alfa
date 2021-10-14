import './Card.css';
import img from '../../images/2fz7vzD6Fy0.jpg'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeCard } from '../../store/cardReducer';

function Card(props) {
  const dispatch = useDispatch();
  const store = useSelector(state => state.cards.cards)
  const [like, setLike] = useState(false);

 
  const handleLike = () => {
    if(like === false) {
      setLike(true);
      dispatch(likeCard(props.card))
      console.log(props.like)
    } else {
      setLike(false);
      console.log(props.like)
    }
  }

  const set = () => {
    dispatch(likeCard(props.card))
  }

  const likeArr = () => {

  }

  return (
    <>
      { props.checked ? (
          <div className="card">
          </div>
        ) : (
          <div className="card">
            <img className="card__img" src={props.url} alt="Фото персонажа"></img>
            <div className="card__content">
                <p className="card__text">{props.name}</p>
                <div className="card__buttons-wrap">
                  <button className={`card__button card__button_like ${like ? 'card__button_like_active' : ''}`} onClick={handleLike}></button>
                  <button className="card__button card__button_delete" onClick={props.remove}></button>
                </div>
            </div>
          </div>
        )
      }
    </>
  );
}

export default Card;