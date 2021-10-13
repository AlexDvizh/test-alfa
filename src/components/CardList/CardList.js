import { useDispatch } from 'react-redux';
import { deleteCard } from '../../store/cardReducer';
import Card from '../Card/Card';
import './CardList.css';

function CardList(props) {
  

  return (
    <section className="card-list">
        <div className="card-list__wrap">
            {props.cards.map((card, index) => (
                <Card 
                key={index}
                url={card.image}
                name={card.name}
                id={card.id}
                isLiked={props.isLiked}
                likedCard={props.likedCard}
                remove={() => props.removeCard(card)}
                />
            ))}
        </div>
    </section>
  );
}

export default CardList;
