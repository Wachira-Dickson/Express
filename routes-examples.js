const express = require('express');
const app = express();

//root route
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

//get all products
app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 }
    ];

    res.json(products);
})

//get a single product
app.get('/products/:productId', (req, res) => {
    console.log('req.params', req.params);

    const productId = parseInt(req.params.productId)
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 }
    ];
    const getSingleProducts = products.find(product=> product.id === productId)

    if(getSingleProducts) {
        res.json(getSingleProducts);
    }else {
        res.status(404).send( 'Product not found! please try with different id');
    }
})

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});