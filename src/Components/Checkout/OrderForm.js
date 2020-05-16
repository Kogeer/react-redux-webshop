import React from 'react';
import styles from './OrderForm.module.css';
import ErrorInputs from './ErrorInputs';
import OrderFormValidation from '../../utils/OrderFormValidation';
import { connect } from 'react-redux';
import { sendOrder } from '../../action/Actions';
import { Redirect } from 'react-router-dom';

class OrderForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: null,
            sent: false
        }

        this.name = React.createRef();
        this.email = React.createRef();
        this.address = React.createRef();
    }

    async validatingAndSend() {
        const name = this.name.current.value;
        const email = this.email.current.value;
        const address = this.address.current.value;
        const items = this.props.items;

        const orderFormValidation = new OrderFormValidation();
        const frontendNotValid = orderFormValidation.formValidation(name, email, address, items);
        if (Object.keys(frontendNotValid).length > 0) {
            this.setState({ errors: frontendNotValid })
            return;
        }

        const data = { name: name, email: email, address: address, items: this.props.items }

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch('http://localhost:3050/sendorder', requestOptions);

        this.props.sendOrder(this.props.items)

        if (response.ok) {
            this.setState(state => {
                return {
                    ...state,
                    sent: true
                }
            })
        }

    }

    render() {
        return (
            <div>
                <div className={styles.formContainer}>
                    <span className={styles.inputDetails}>Name:</span><input type="text" ref={this.name}></input>
                    <span className={styles.inputDetails}>Email:</span><input type="text" ref={this.email}></input>
                    <span className={styles.inputDetails}>Address:</span><input type="text" ref={this.address}></input>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.orderButton} onClick={() => this.validatingAndSend()}>Order</button>
                </div>
                {this.state.errors && <ErrorInputs error={this.state.errors} />}
                {this.state.sent && <Redirect to="/" />}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendOrder: (items) => dispatch(sendOrder(items))
    }
}

export default connect(null, mapDispatchToProps)(OrderForm);

