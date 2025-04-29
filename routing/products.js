const express = require("express");

const cartController = require('../controllers/cartController');
const productsController = require("../controllers/productsController");

const router = express.Router();

router.get("/", productsController.getProductsView);
router.get("/add", productsController.getAddProductView);
router.post("/add", cartController.addProductToCart);
router.get("/new", productsController.getNewProductView);
router.get("/:name", productsController.getProductView);
router.delete("/:name", productsController.deleteProduct);

module.exports = router;
