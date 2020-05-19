import {dataLoad} from '../action/Actions';
import {store} from '../index';

let initialState = {
    prodItems: [],
    cartItems: [],    
    offerings : [
        {
            img: '/imgs/iphone.jpeg',
            index: 0,
            sku: 'TRL',
            marketing: 'Ez nem az aminek látszik'
        },
        {
            img: '/imgs/lenovo.jpg',
            index: 1,
            sku: 'KKK',
            marketing: 'No persze ez sem'
        },
        {
            img: '/imgs/moha.jpg',
            index: 2,
            sku: 'BG',
            marketing: 'Naná hogy ez se'
        }
    ]

}

async function loadData() {
    const data = await fetch('http://localhost:3050/products');
    const dataJson = await data.json();
    store.dispatch(dataLoad(dataJson.products));
}

export {initialState,loadData};