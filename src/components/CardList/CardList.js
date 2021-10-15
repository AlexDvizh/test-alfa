import Card from '../Card/Card';
import './CardList.css';

function CardList(props) {

    return (
        <section className="card-list">
            <div className="card-list__wrap">
                {
                props.cards.map(card => 
                    <Card 
                        key={card.id} 
                        cardInfo={card} 
                    />)
                }
            </div>
        </section>
    );
}

export default CardList;