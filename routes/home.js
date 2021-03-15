const express = require('express');
const basePath = require('../utils/path');
const Quote = require('../models/quote');

const router = express.Router();

router.get('/', (req, res) => {
  res.render(`${basePath}/views/index`);
});

router.post('/quotes', async (req, res) => {
  const { name, quote } = req.body;
  let quotes = {};
  quotes.name = name;
  quotes.quote = quote;
  let quoteModel = new Quote(quotes);
  await quoteModel.save();
  res.json(quoteModel);
});

module.exports = router;