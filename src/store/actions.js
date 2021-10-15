import { CARDS_FETCHED, TOGGLE_LIKE_CARD, REMOVE_CARD, FILTER_BY_LIKED } from './types';
import { getCards } from '../api/apiCards';

export function fetchCards() {
    return function(dispatch) {
        getCards().then(cards => {
            dispatch(cardsFetched(cards));
        });
    }
}

export function cardsFetched(cards) {
    return {
        type: CARDS_FETCHED,
        payload: cards
    };
}

export function toggleLikeCard(cardId) {
    return {
        type: TOGGLE_LIKE_CARD,
        payload: cardId
    };
}

export function removeCard(cardId) {
    return {
        type: REMOVE_CARD,
        payload: cardId
    };
}

export function filterByLiked(isFilterActive) {
    return {
        type: FILTER_BY_LIKED,
        payload: isFilterActive
    };
}