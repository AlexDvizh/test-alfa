const FETCH_CARDS = "FETCH_CARDS";
const DELETE_CARD = "DELETE_CARD";
const LIKE_CARD = "LIKE_CARD";


const defaultState = {
    cards: [],
    isLiked: false
}

export const cardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_CARDS:
            return {
                ...state,
                cards: [...action.payload.map(card => ({
                    ...card,
                    isLiked: false
                    }))
                ]
            };
        case DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter(card => card.id !== action.payload)
            }
        case LIKE_CARD:
            return {
                ...state,
                ...action.payload.isLiked = true,
            }

        default:
            return state;
    }
}

export const addAllCards = (payload) => ({type: FETCH_CARDS, payload})
export const deleteCard = (payload) => ({type: DELETE_CARD, payload})
// export const likeCard = (payload) => ({type: LIKE_CARD, payload})
export const likeCard = (payload) => {
    console.log(payload)
   return {type: LIKE_CARD, payload}
}