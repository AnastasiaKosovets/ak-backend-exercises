
const router = require('express').Router();
const usersController = require('../controllers/usersController');


//CRUD.......


router.get('/', usersController.getAllUser);
router.post('/', usersController.createUser);
router.put('/', usersController.updateUser);
// router.delete('/', usersController.deleteUser);


module.exports = router;