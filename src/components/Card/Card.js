import './Card.css';
import { useDispatch } from 'react-redux';
import { removeCard, toggleLikeCard } from '../../store/actions';

function Card(props) {
    const dispatch = useDispatch();

    const handleRemoveCard = () => {
    dispatch(removeCard(props.cardInfo.id));
    };

    const handleToggleLikeCard = () => {
    dispatch(toggleLikeCard(props.cardInfo.id));
    }

    return (
    <div className="card">
        <img className="card__img" src={props.cardInfo.image} alt="Фото персонажа"></img>
        <div className="card__content">
            <p className="card__text">{props.cardInfo.name}</p>
            <div className="card__buttons-wrap">
            <button className={`card__button card__button_like ${props.cardInfo.isLiked ? 'card__button_like_active' : ''}`} onClick={handleToggleLikeCard}></button>
            <button className="card__button card__button_delete" onClick={handleRemoveCard}></button>
            </div>
        </div>
    </div>
    );
}

export default Card;