import React from 'react';
import { connect } from 'react-redux';

function Checkout(props) {
    return(
        <div>
            {
                props.cartItems.map(item=> {
                    return <span>{item.name}</span>
                })
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cartItems: state.cartItems
    }
}

export default connect(mapStateToProps)(Checkout)