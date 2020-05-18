const ADD = 'ADD';
const REMOVE = 'REMOVE';
const DELETE_ALL = 'DELETE_ALL';
const SENDORDER = 'SENDORDER';
const DATA_LOAD = 'DATA_LOAD';

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

function sendOrder(items) {
    return {
        type: SENDORDER,
        items
    }
}

function dataLoad(items) {
    return {
        type: DATA_LOAD,
        items
    }
}

export {ADD,REMOVE,addToCart,removeFromCart,DELETE_ALL,emptyCart,SENDORDER,sendOrder,DATA_LOAD,dataLoad};