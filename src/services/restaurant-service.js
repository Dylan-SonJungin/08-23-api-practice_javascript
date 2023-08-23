const getConnection = require("../database/connection");
const RestaurantRepo = require("../repositories/restaurant-repo");

exports.findAllRestaurants = () => {

    return new Promise((resolve, reject) => {
        const connection = getConnection();

        const results =  RestaurantRepo.findAllRestaurants(connection);

        connection.end();

        resolve(results);

    });
    
};

exports.findRestaurantByCode = (resNo) => {

    return new Promise((resolve, reject) => {
    
        const connection = getConnection();

        const results =  RestaurantRepo.findRestaurantByCode(connection, resNo);

        connection.end();

        resolve(results);
    });
}

exports.registRestaurant = (restaurant) => {
    return new Promise((resolve, reject) => {
        const connection = getConnection();

        const result = RestaurantRepo.registRestaurant(connection, restaurant);

        connection.end();

        resolve(result);
    });
}

exports.updateRestaurant = (resNo, restaurant) => {
    return new Promise((resolve, reject) => {
        const connection = getConnection();
        const result = RestaurantRepo.updateRestaurant(connection, resNo, restaurant);
        connection.end();
        resolve(result);
    });
}

exports.deleteRestaurant = (resNo) => {
    return new Promise((resolve, reject) => {
        const connection = getConnection();
        const result = RestaurantRepo.deleteRestaurant(connection, resNo);
        connection.end();
        resolve(result);
    });
}