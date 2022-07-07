const express = require('express');
const { splitPayment } = require('../controller/paymentController');

const router = express.Router();

router.route('/').post(splitPayment);

module.exports = router;
