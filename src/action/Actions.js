const ADD = 'ADD';
const REMOVE = 'REMOVE';

function addToCart(item) {
    return {
        type: ADD,
        item
    }
}

function removeFromCart(item) {
    return {
        type: REMOVE,
        item
    }
}

export {ADD,REMOVE,addToCart,removeFromCart};