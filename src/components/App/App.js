import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardList from '../CardList/CardList';
import Header from '../Header/Header';
import './App.css';
import { fetchCards, filterByLiked } from '../../store/actions';
import Filter from '../Filter/Filter';


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCards());
    }, [dispatch]);

    const cards = useSelector(state => state.cardList.cards);
    const filteredCards = useSelector(state => state.cardList.filteredCards);

    const [isFilterActive, toggleFilter] = useState(false);

    const handleFilterChange = (isFilterActive) => {
        toggleFilter(isFilterActive);
        dispatch(filterByLiked(isFilterActive));
    };


    return (
    <div className="app">
        <Header />
        <Filter 
            isActive={isFilterActive} 
            onChange={handleFilterChange} 
        />
        <CardList 
            cards={ isFilterActive ? filteredCards : cards } 
        />
    </div>
    );
}

export default App;