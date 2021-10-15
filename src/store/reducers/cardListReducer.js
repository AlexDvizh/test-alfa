import { CARDS_FETCHED, REMOVE_CARD, TOGGLE_LIKE_CARD, FILTER_BY_LIKED } from '../types';

const initialState = {
    cards: [],
    filteredCards: []
};

export const cardListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CARDS_FETCHED:
            return {
                ...state,
                cards: action.payload,
                filteredCards: action.payload
            }

        case REMOVE_CARD:
            const filterBy = card => card.id !== action.payload;

            return {
                ...state,
                cards: state.cards.filter(filterBy),
                filteredCards: state.filteredCards.filter(filterBy)
            }

        case TOGGLE_LIKE_CARD:
            const card = state.cards.find(card => card.id === action.payload);
            card.isLiked = !card.isLiked;

            return {
                ...state,
                cards: [...state.cards],
                filteredCards: [...state.filteredCards]
            };

        case FILTER_BY_LIKED:
            const isFilterActive = action.payload;
            
            return {
                ...state,
                filteredCards: isFilterActive ? state.cards.filter(card => card.isLiked) : [...state.cards]
            };

        default:
            return state;
    }
}