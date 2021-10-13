const FETCH_CARDS = "FETCH_CARDS";
const DELETE_CARD = "DELETE_CARD";
const LIKE_CARD = "LIKE_CARD";
const FILTER_LIKE = "FILTER_LIKE";

const defaultState = {
    cards: [],
    isLiked: false
}

export const cardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_CARDS:
            return {
                ...state,
                cards: [...action.payload]
            };
        case DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter(card => card.id !== action.payload)
            }
        case LIKE_CARD:
            return {
                ...state,
                isLiked: action.payload
            }
        case FILTER_LIKE:
            return {
                ...state

            }

        default:
            return state;
    }
}

export const addAllCards = (payload) => ({type: FETCH_CARDS, payload})
export const deleteCard = (payload) => ({type: DELETE_CARD, payload})
export const likeCard = (payload) => ({type: LIKE_CARD, payload})