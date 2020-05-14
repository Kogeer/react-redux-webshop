import React from 'react';
import HeaderCartDeatils from '../Header/HeaderCartDetails';

export default function CartSummary(props) {
    return (
        <HeaderCartDeatils items={props.items}/>
    )
}