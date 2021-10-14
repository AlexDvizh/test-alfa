import { useSelector } from 'react-redux';
import './Favorite.css';

function Favorite(props) {
  const cards = useSelector(state => state.cards.cards)

  return (
    <section className="card-list">
        <div className="card-list__wrap">

        </div>
    </section>
  );
}

export default Favorite;