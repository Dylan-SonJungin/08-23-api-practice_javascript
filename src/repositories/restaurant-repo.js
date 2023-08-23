const RestaurantQuery = require("../database/restaurant-query");

exports.findAllRestaurants = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query(RestaurantQuery.findAllRestaurants(), (err, result) => {
            if (err) {
                reject(err);
            } 
            resolve(result);
        });
    });
};

exports.findRestaurantByCode = (connection, resNo) => {
    return new Promise((resolve, reject) => {
        connection.query(RestaurantQuery.findRestaurantByCode(resNo), [], (err, result) => {
            if (err) {
                reject(err);
            } 
            resolve(result);
        });
    });
}

exports.registRestaurant = (connection, restaurant) => {
    return new Promise((resolve, reject) => {
        connection.query(RestaurantQuery.registRestaurant(restaurant), (err, result) => {
            if (err) {
                reject(err);
            } 
            resolve(result);
        });
    });
}

exports.updateRestaurant = (connection, resNo, restaurant) => {
    return new Promise((resolve, reject) => {
        connection.query(RestaurantQuery.updateRestaurant(resNo, restaurant), (err, result) => {
            if (err) {
                reject(err);
            } 
            resolve(result);
        });
    });
}

exports.deleteRestaurant = (connection, resNo) => {
    return new Promise((resolve, reject) => {
        connection.query(RestaurantQuery.deleteRestaurant(resNo), (err, result) => {
            if (err) {
                reject(err);
            } 
            resolve(result);
        });
    });
}