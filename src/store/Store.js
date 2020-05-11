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
            price: 300,
            stock: 10,
            description: 'Ez egy igen impozáns trombita. Szépen szól és jól lehet vele a szomszédokat idegesíteni',
            specs: 'Length=300mm,Height=300mm,Loudness=300dB'
        },
        {
            img: '/imgs/product_test.jpeg',
            name: 'Quux Kex',
            sku: 'KKK',
            price: 100,
            stock: 30
        },
        {
            img: '/imgs/product_test.jpeg',
            name: 'Incredible freeeeezer',
            sku: 'ICF',
            price: 400,
            stock: 20
        },
        {
            img: '/imgs/product_test.jpeg',
            name: 'Big gun',
            sku: 'BG',
            price: 900,
            stock: 3
        },
        {
            img: '/imgs/product_test.jpeg',
            name: 'Mechiko tequila',
            sku: 'MT',
            price: 30,
            stock: 1
        },{
            img: '/imgs/product_test.jpeg',
            name: 'Mechiko beer',
            sku: 'MB',
            price: 15,
            stock: 900
        }
    ]

}

export default initialState;