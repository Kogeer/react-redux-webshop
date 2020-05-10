import React from 'react';

export default function HeaderCartDeatils(props) {
    return(
        <div>
            {props.items.map((it,idx) => {
                return <div key={idx}>{it.name} {it.pcs} x {it.subtotal} = {it.pcs*it.subtotal}</div>
            })}
        </div>
    )
}