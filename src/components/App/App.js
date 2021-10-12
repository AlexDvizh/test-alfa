import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../api/apiCards';
import CardList from '../CardList/CardList';
import Filter from '../Filter/Filter';
import Header from '../Header/Header';
import './App.css';


function App(props) {
  
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards)

  console.log(cards)

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch])


  return (
    <div className="app">
      {/* <button onClick={() => dispatch(fetchCards())}>add cards</button> */}
      <Header />
      <Filter />
      <CardList 
        cards={cards}
      />
    </div>
  );
}


export default App;