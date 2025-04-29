const Product = require('../models/Product');
const Cart = require('../models/Cart');
const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");

exports.addProductToCart = (request, response) => {
  try {
    Product.add(request.body);

    Cart.add(request.body.name);

    response.status(STATUS_CODE.FOUND).redirect('/products/new');
  } catch (error) {
    response.status(STATUS_CODE.NOT_FOUND).send(error.message);
  }
};

exports.getProductsCount = (request, response) => {
  const count = Cart.getProductsQuantity();

  response.status(STATUS_CODE.OK).json({ totalQuantity: count });
};
