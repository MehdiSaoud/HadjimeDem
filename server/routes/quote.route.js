const express = require('express');
const quoteCtrl = require('../controllers/quote.controller');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const getQuotePrice = require('../middleware/get-quote-price')
module.exports = router;



router.route('/')
.post(getQuotePrice,asyncHandler(insertQuote))
.get(asyncHandler(getQuotes));



async function insertQuote(req, res) {
  console.log('ouwoo2',req);
  let quote = await quoteCtrl.insert(req.body);
  res.json(quote);
}

async function getQuotes(req, res) {
  let quotes = await quoteCtrl.getAll();
  res.json(quotes);
}