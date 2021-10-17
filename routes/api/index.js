const router = require('express').Router();
const users = require('./users');
// const pizzaRoutes = require('./pizza-routes');

router.use('/users', users);
// router.use('/pizzas', pizzaRoutes);

module.exports = router;
