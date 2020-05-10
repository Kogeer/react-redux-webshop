const ADD = 'ADD';

function addToCart(item) {
    return {
        type: ADD,
        item
    }
}

export {ADD,addToCart};