const express = require('express');
const quoteCtrl = require('../controllers/quote.controller');
const asyncHandler = require('express-async-handler');
const router = express.Router();
module.exports = router;


router.route('/').post(asyncHandler(insertQuote));



async function insertQuote(req, res) {
  let quote = await quoteCtrl.insert(req.body);
  res.json(quote);
}