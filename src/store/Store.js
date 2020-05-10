const initialState = {
    cartItems : [
        {
            name: 'Triola',
            pcs: 2,
            subtotal:300
        },
        {
            name: 'Quux Kex',
            pcs: 1,
            subtotal:100
        }
    ],
    prodItems : [
        {
            img: '/imgs/product_test.jpeg',
            name: 'Triola',
            sku: 'TRL',
            price: 300
        },
        {
            img: '/imgs/product_test.jpeg',
            name: 'Quux Kex',
            sku: 'KKK',
            price: 100
        },
        {
            img: '/imgs/product_test.jpeg',
            name: 'Incredible freeeeezer',
            sku: 'ICF',
            price: 400
        },
        {
            img: '/imgs/product_test.jpeg',
            name: 'Big gun',
            sku: 'BG',
            price: 900
        },
        {
            img: '/imgs/product_test.jpeg',
            name: 'Mechiko tequila',
            sku: 'MT',
            price: 30
        }
    ]

}

export default initialState;