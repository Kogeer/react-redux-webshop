import React from 'react';
import { connect } from 'react-redux';
import ProdBox from './ProdBox';
import styles from './Products.module.css'

function Products(props) {
    return(
        <div className={styles.ProductsGridContainer}>
            {
                props.prodItems.map((item,idx)=> {
                    let cartItem = {};
                    props.cartItems.forEach(cItem => {
                        if(cItem.name === item.name) {
                            cartItem = {...cItem}
                        }
                    }) 
                    return <ProdBox item={item} key={idx} inCart={cartItem}/>
                })
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cartItems: state.cartItems,
        prodItems: state.prodItems
    }
}

export default connect(mapStateToProps)(Products);