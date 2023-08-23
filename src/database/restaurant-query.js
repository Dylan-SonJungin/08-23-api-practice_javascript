exports.findAllRestaurants = () => {

    return 'SELECT * FROM RESTAURANT';
}

exports.findRestaurantByCode = (resNo) => {

    return `SELECT * FROM RESTAURANT WHERE RES_NO = ${resNo}`;
}

exports.registRestaurant = (restaurant) => {
    return `INSERT INTO RESTAURANT (RES_NAME, CATEGORY, RATE) VALUES ('${restaurant.resName}', '${restaurant.category}', '${restaurant.rate}')`;
}

exports.updateRestaurant = (resNo, restaurant) => {
    return `UPDATE RESTAURANT SET RES_NAME = '${restaurant.resName}', CATEGORY = '${restaurant.category}', RATE = '${restaurant.rate}' WHERE RES_NO = ${resNo}`;
}

exports.deleteRestaurant = (resNo) => {
    return `DELETE FROM RESTAURANT WHERE RES_NO = ${resNo}`;
}
