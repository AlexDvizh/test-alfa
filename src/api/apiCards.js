import { addAllCards } from "../store/cardReducer";

const URL = 'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10';

export const fetchCards = () => {
    return function(dispatch) {
        fetch(URL)
            .then((res) => {
                if(res.ok) {
                    return res.json();
                } else {
                    throw new Error(res.statusText);
                }
            })
            .then((cards) => {
                return dispatch(addAllCards(cards))
            })
    }
}
