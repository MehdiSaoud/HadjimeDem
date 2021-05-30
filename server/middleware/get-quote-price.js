const getQuotePrice = function (req, res, next) {

  cubePrice = 35;
  volumePrice = req.body.volume * cubePrice
  prices = {
    low: volumePrice,
    medium: volumePrice + 200,
    hight: volumePrice + 400
  }
  console.log(prices);
  req.body.prices = prices
  return next();
}

module.exports = getQuotePrice;
