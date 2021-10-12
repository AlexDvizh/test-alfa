const FETCH_CARDS = "FETCH_CARDS";

// const defaultState = [
//     {
//         url: 'https://www.gravatar.com/avatar/ef4c56e983eaf1d98061403047b5a6eb?s=64&d=identicon&r=PG&f=1',
//         name: 'Vasya'
//     },
//     {
//         url: 'https://www.gravatar.com/avatar/ef4c56e983eaf1d98061403047b5a6eb?s=64&d=identicon&r=PG&f=1',
//         name: 'Vanya'
//     }
// ]

export const cardReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_CARDS:
            return {...state, cards: [...action.payload]}

        default:
            return state;
    }
}

export const addAllCards = (payload) => ({type: FETCH_CARDS, payload})