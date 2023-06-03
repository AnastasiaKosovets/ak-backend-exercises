
const { Restaurant } = require('../models');

const restaurantsController = {};

restaurantsController.getAllRestaurant = async (req, res) => {

    try {

        const results = await Restaurant.findAll();

        return res.json(results);

    } catch (error) {
        return res.status(500).send(error.message); 
    }
}

restaurantsController.createRestaurant = async (req, res) => {

    try {

        let body = req.body;

        const results = await Restaurant.create(
            {
                name: body.name,
                address: body.address
            }
        );

        return res.json(results);

    } catch (error) {
        return res.status(500).send(error.message); 
    }
}

restaurantsController.updateRestaurant = async (req, res) => {

    let body = req.body;

    try {

        const results = await Restaurant.update(
            {
                name: body.name,
                address: body.address
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

restaurantsController.deleteRestaurant = async (req, res) => {

    let body = req.body;

    try {

        const results = await Restaurant.destroy(
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

module.exports = restaurantsController;