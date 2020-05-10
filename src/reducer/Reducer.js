import initialState from "../store/Store";
import { ADD } from "../action/Actions";


export default function Reducer(state = initialState, action) {
    switch(action.type) {
        case ADD: return {
            ...state,
            cartItems : [...state.cartItems, action.item]
        }

        default : return state;
    }
}