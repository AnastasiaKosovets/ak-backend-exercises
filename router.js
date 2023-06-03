
const router = require('express').Router();

const recipesRouter = require('./views/recipeRouter');

const restaurantsRouter = require('./views/restaurantRouter');

const userRouter = require('./views/userRouter');

//Routing......

router.use('/recipes', recipesRouter);
router.use('/restaurant', restaurantsRouter);
router.use('/user', userRouter);

module.exports = router;