const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for JSON parsing
app.use(express.json());

// Basic product routes
app.get('/products', (req, res) => {
    res.json([{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]);
});

app.post('/products', (req, res) => {
    const newProduct = req.body;
    // Logic to add the product
    res.status(201).json(newProduct);
});

// Basic customer routes
app.get('/customers', (req, res) => {
    res.json([{ id: 1, name: 'Customer 1' }, { id: 2, name: 'Customer 2' }]);
});

app.post('/customers', (req, res) => {
    const newCustomer = req.body;
    // Logic to add the customer
    res.status(201).json(newCustomer);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});