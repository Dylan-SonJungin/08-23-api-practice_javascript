const express = require('express');
const morgan = require('morgan');

const RestaurantController = require('./src/controllers/restaurant-controller');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

// console.log(RestaurantController.findAllRestaurants());

const restaurantRouter = require('./src/routes/restaurant-route');
app.use('/restaurant', restaurantRouter);

// const menuRouter = require('./src/routes/menu-route');
// app.use('/menu', menuRouter);

app.listen(8888, () => console.log('Listening on port 8888'));