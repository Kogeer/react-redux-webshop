import React from 'react';
import Logo from './Logo';
import HeaderCart from './HeaderCart';
import styles from './Header.module.css';
import { connect } from 'react-redux';


function Header(props) {
    return(
        <div className={styles.Header}>
            <Logo />
            <div className={styles.HeaderLogo}>Webshop name</div>
            <HeaderCart items={props.cartItems}/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cartItems: state.cartItems
    }
}

export default connect(mapStateToProps)(Header);