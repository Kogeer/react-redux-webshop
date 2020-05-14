export default class OrderFormValidation {
    constructor() {
        this.error = [];
    }

    formValidation(name,email,address) {
        if(!name) {
            this.error.push('Name is required');
        }
        if(!email) {
            this.error.push('Email is required');
        }

        if(!address) {
            this.error.push('Address is required');
        }

        return this.error;
    }
}