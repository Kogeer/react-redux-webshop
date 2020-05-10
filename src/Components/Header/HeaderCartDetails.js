import React from 'react';

export default function HeaderCartDeatils(props) {
    return(
        <div>
            {props.items.map(it => {
                return <div>{it.name} {it.pcs} x {it.subtotal} = {it.pcs*it.subtotal}</div>
            })}
        </div>
    )
}