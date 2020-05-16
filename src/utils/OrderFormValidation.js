export default class OrderFormValidation {
    constructor() {
        this.error = [];
    }

    formValidation(name,email,address,items) {
        if(!name) {
            this.error.push('Name is required');
        }
        if(!email) {
            this.error.push('Email is required');
        }

        if(!address) {
            this.error.push('Address is required');
        }

        if(!items.length) {
            this.error.push('No items in your cart')
        }

        return this.error;
    }
}