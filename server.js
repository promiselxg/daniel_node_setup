const express = require('express');
const dotenv = require('dotenv').config();
const payment = require('./routes/payment');

//  initialize app
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// //  Routes
app.use('/api/payments', payment);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
