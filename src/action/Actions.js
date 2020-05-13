const ADD = 'ADD';
const REMOVE = 'REMOVE';
const DELETE_ALL = 'DELETE_ALL'

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

function emptyCart(items) {
    return {
        type: DELETE_ALL,
        items
    }
}

export {ADD,REMOVE,addToCart,removeFromCart,DELETE_ALL,emptyCart};