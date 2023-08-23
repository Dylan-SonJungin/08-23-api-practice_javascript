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
    return new Promise(async (resolve, reject) => {
        const connection = getConnection();

        connection.beginTransaction();

        try{
            const result = await RestaurantRepo.registRestaurant(connection, restaurant);

            const insertedRes = await RestaurantRepo.findRestaurantByCode(connection, result.insertId);

            connection.commit();

            resolve(insertedRes);
        } catch(error) {
            connection.rollback();
            console.log("rollback successful");

            reject(error);
        } finally {
            connection.end();
            console.log('connection ended');
        }

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