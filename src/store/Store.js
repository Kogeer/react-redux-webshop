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
            description: 'Ez egy igen impozáns trombita. Szépen szól és jól lehet vele a szomszédokat idegesíteni.',
            specs: 'Length=300mm,Height=300mm,Loudness=300dB'
        },
        {
            img: '/imgs/product_test.jpeg',
            name: 'Quux Kex',
            sku: 'KKK',
            price: 100,
            stock: 30,
            description: 'Jó reggelt kex. 12db/cs. Környezetbarát csomagolásban.',
            specs: 'Length=120mm,Height=300mm'
        },
        {
            img: '/imgs/product_test.jpeg',
            name: 'Incredible freeeeezer',
            sku: 'ICF',
            price: 400,
            stock: 20,
            description: '300L-es hűtőszekrény. Dupla ajtóval, LED kijelzővel. Edzett acél inox anyagból.',
            specs: 'Length=3000mm,Height=2000mm'
        },
        {
            img: '/imgs/product_test.jpeg',
            name: 'Big gun',
            sku: 'BG',
            price: 900,
            stock: 3,
            description: 'Csak egy hatalmas fegyver, semmi érdekes. 9000lőszer/tár.',
            specs: 'Length=1000mm,Height=400mm'
        },
        {
            img: '/imgs/product_test.jpeg',
            name: 'Mechiko tequila',
            sku: 'MT',
            price: 30,
            stock: 1,
            description: 'Egyenesen Mehikóból. Extra nagy 5L-es kiszerelésben. A legjobb tequila!',
            specs: 'Length=300mm,Height=500mm'
        },{
            img: '/imgs/product_test.jpeg',
            name: 'Mechiko beer',
            sku: 'MB',
            price: 15,
            stock: 900,
            description: 'Egyenesen Mehikóból. Extra nagy 5L-es kiszerelésben. A legjobb sör!',
            specs: 'Length=300mm,Height=500mm'
        }
    ]

}

export default initialState;