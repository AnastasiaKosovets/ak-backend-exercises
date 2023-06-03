
const { User } = require('../models');

const usersController = {};

usersController.getAllUser = async (req, res) => {

    try {

        const results = await User.findAll();

        return res.json(results);

    } catch (error) {
        return res.status(500).send(error.message); 
    }
}

usersController.createUser = async (req, res) => {

    try {

        let body = req.body;

        const results = await User.create(
            {
                name: body.name,
                age: body.age,
                email: body.email,
                speciality: body.speciality
            }
        );

        return res.json(results);

    } catch (error) {
        return res.status(500).send(error.message); 
    }
}

usersController.updateUser = async (req, res) => {

    let body = req.body;

    try {

        const results = await User.update(
            {
                name: body.name,
                age: body.age,
                email: body.email,
                speciality: body.speciality
            },
            {
                where: {
                    id: body.id
                }
            }
        );

        return res.json(results);

    } catch (error) {
        return res.status(500).send(error.message); 
    }
}

usersController.deleteRestaurant = async (req, res) => {

    let body = req.body;

    try {

        const results = await User.destroy(
            {
                where: {
                    id: body.id
                }
            }
        );

        return res.json(results);

    } catch (error) {
        return res.status(500).send(error.message); 
    }
}

module.exports = usersController;