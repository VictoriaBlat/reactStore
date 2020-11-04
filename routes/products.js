const router = require("express").Router();
const Product = require("../models/Product");

/* Here we'll write the routes for the product */

router.get("/products", (req, res, next) => {
  Product.find({})
    .then(products => {
      console.log(products);
      res.json({ products: products });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

router.get("/products/:productId", (req, res, next) => {
  const productId = req.params.productId;
  console.log("productId", productId);
  Product.findOne({ _id: productId })
    .then(product => {
      if (product) {
        res.json({ product: product });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
