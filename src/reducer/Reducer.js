import {initialState, loadData} from "../store/Store";
import { ADD,REMOVE, DELETE_ALL, SENDORDER, DATA_LOAD } from "../action/Actions";
import {loadState} from '../store/localeStorage';
import { loadSessionState } from "../store/sessionStorage";


const persistState = loadState();
const prods = loadSessionState();
if(persistState) {
    initialState.cartItems = persistState;
    initialState.prodItems = prods;
}
// const persistState = false;

export default function Reducer(state = initialState, action) {
    switch(action.type) {
        case ADD: return {
            ...state,
            cartItems : state.cartItems.find(item => item.name === action.item.name) ?
            state.cartItems.map(item => {
                if(item.name === action.item.name) {
                    return {
                        ...item,
                        pcs: item.pcs+1
                    }
                }
                return item
            })
            : [...state.cartItems, {name: action.item.name, pcs: 1, subtotal: action.item.price}],
            prodItems : state.prodItems.map(item => {
                if(item.name === action.item.name) {
                    return {
                        ...item,
                        stock: item.stock-1
                    }
                }
                return item
            })
        }

        case REMOVE: return {
            ...state,
            cartItems: state.cartItems.map((item,idx) => {
                if(item.name === action.item.name) {
                    return {
                        ...item,
                        pcs: item.pcs-1
                    }
                }
                return item
            }).filter(item => item.pcs > 0),
            prodItems: state.prodItems.map(item => {
                if(item.name === action.item.name) {
                    return {
                        ...item,
                        stock: item.stock+1
                    }
                }
                return item
            })
        }

        case DELETE_ALL: return {
            ...state,
            cartItems: [],
            prodItems: state.prodItems.map(item => {
                const addStock = action.items.find(it => it.name === item.name)
                if(addStock) {
                    return {
                        ...item,
                        stock: item.stock + addStock.pcs
                    }
                }
                return item
            })
        }

        case SENDORDER: return {
            ...state,
            cartItems: []
        }

        case DATA_LOAD:
        return {
            ...state,
            prodItems: action.items
        }

        default : return state;
    }
}