
const router = require('express').Router();
const restaurantsController = require('../controllers/restaurantsController');


//CRUD.......


router.get('/', restaurantsController.getAllRestaurant);
router.post('/', restaurantsController.createRestaurant);
router.put('/', restaurantsController.updateRestaurant);
router.delete('/', restaurantsController.deleteRestaurant);


module.exports = router;