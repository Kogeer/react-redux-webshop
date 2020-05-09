import React from 'react';

export default function HeaderCartDeatils(props) {
    return(
        <div>
            {props.items.map(it => {
                return <span>{it.name} x {it.subtotal}</span>
            })}
        </div>
    )
}