import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../api/apiCards';
import { deleteCard, likeCard } from '../../store/cardReducer';
import CardList from '../CardList/CardList';
import Header from '../Header/Header';
import './App.css';


function App(props) {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards.cards)
  const [checkboxActive, setCheckboxActive] = useState(false)

  const changeCheckbox = () => {
    setCheckboxActive(!checkboxActive)
  }

  useEffect(() => {
    dispatch(fetchCards())
  }, [])

  const removeCard = (card) => {
    dispatch(deleteCard(card.id));
  }

  const likedCard = (card) => {
    dispatch(likeCard(card.id))
  }


  return (
    <div className="app">
      <Header />
      <CardList 
        cards={cards}
        removeCard={removeCard}
        likedCard={likedCard}
        checkboxActive={checkboxActive}
        checkbox={changeCheckbox}
      />
    </div>
  );
}


export default App;