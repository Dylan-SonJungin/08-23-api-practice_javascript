const express = require('express');
const router = express.Router();
const RestaurantController = require('../controllers/restaurant-controller');

router.get('/', RestaurantController.findAllRestaurants);
router.get('/:resNo', RestaurantController.findRestaurantByCode);
router.post('/', RestaurantController.registRestaurant);
router.put('/:resNo', RestaurantController.updateRestaurant);
router.delete('/:resNo', RestaurantController.deleteRestaurant);

module.exports = router;