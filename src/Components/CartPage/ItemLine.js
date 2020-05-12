import React from 'react';
import Img from 'react-image';
import { connect } from 'react-redux';
import styles from './ItemLine.module.css'
import ItemLineButtons from './ItemLineButtons';

function ItemLine(props) {
    return(
        <div className={styles.itemLineContainer}>
            <div><Img src={props.stockItem.img} /></div>
            <div className={styles.itemName}>{props.item.name}</div>
            <ItemLineButtons pcs={props.item.pcs} item={props.item} stockPcs={props.stockItem.stock}/>
            <div>= {props.item.pcs*props.item.subtotal}</div>
        </div>
    )
}

function mapStateToProps(state,props) {
    return {
        stockItem: state.prodItems.find(item => item.name === props.item.name)
    }
}
export default connect(mapStateToProps)(ItemLine)
