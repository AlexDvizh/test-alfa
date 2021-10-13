import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../api/apiCards';
import { deleteCard, likeCard } from '../../store/cardReducer';
import CardList from '../CardList/CardList';
import Filter from '../Filter/Filter';
import Header from '../Header/Header';
import './App.css';


function App(props) {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards.cards)
  const isLiked = useSelector(state => state.cards.isLiked)
  
  console.log(cards)

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch])

  const removeCard = (card) => {
    dispatch(deleteCard(card.id));
  }

  const likedCard = () => {
    dispatch(likeCard(true))
  }


  return (
    <div className="app">
      <Header />
      <Filter />
      <CardList 
        cards={cards}
        removeCard={removeCard}
        likedCard={likedCard}
        isLiked={isLiked}
      />
    </div>
  );
}


export default App;