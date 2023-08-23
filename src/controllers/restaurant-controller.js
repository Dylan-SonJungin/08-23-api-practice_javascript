const HttpStatus = require('http-status');
const RestaurantService = require('../services/restaurant-service');
const RestaurantDTO = require('../dto/restaurant-dto');

exports.findAllRestaurants = async (req, res, next) => {
    const result = await RestaurantService.findAllRestaurants();

    res.status(200).send({
        status: HttpStatus.OK,
        message: 'OK',
        results: result
    });
}

exports.findRestaurantByCode = async (req, res, next) => {
    const result = await RestaurantService.findRestaurantByCode(req.params.resNo);

    if(result && result.length > 0) {
        res.status(HttpStatus.OK).send({
            status: HttpStatus.OK,
            message: 'ok',
            results: result
        });
    }

    if(result && result.length === 0) {
        res.status(HttpStatus.NOT_FOUND).send({
            status: HttpStatus.NOT_FOUND,
            message: 'not found',
            code: -999,
            results: [],
            links: [
                {
                    resl: 'restaurantByCode',
                    method: 'GET',
                    href: 'https:api.ohgiraffers.com/api/v1/restaurants'
                }
            ]
        });
    }
}

exports.registRestaurant = async (req, res, next) => {

    const result = await RestaurantService.registRestaurant(new RestaurantDTO(req.body));

    if(result) {
        res.status(HttpStatus.CREATED).send({ //201
            status: HttpStatus.CREATED,
            message: 'CREATED',
            results: {
                resName: result.resName
            },
            contentLocation: `/restaurant/${result.resName}`
        });
    } else{
        res.status(HttpStatus.BAD_REQUEST).send({
            status: HttpStatus.BAD_REQUEST,
            message: 'BAD_REQUEST',
            code: -888,
            results: [],
            links: [
                {
                    rel: 'restaurantRegist',
                    method: 'POST',
                    href: 'https:api.ohgiraffers.com/api/v1/restaurant'
                }
            ]
        });
    }
}

exports.updateRestaurant = async (req, res, next) => {
    const result = await RestaurantService.updateRestaurant(req.params.resNo, new RestaurantDTO(req.body));

    if(result) {
        res.status(HttpStatus.OK).send({ //201
            status: HttpStatus.OK,
            message: 'UPDATED',
            results: {
                resName: result.resName
            },
            contentLocation: `/restaurant/${req.params.resNo}`
        });
    } else{
        res.status(HttpStatus.BAD_REQUEST).send({
            status: HttpStatus.BAD_REQUEST,
            message: 'BAD_REQUEST',
            code: -777,
            results: [],
            links: [
                {
                    rel: 'restaurantRegist',
                    method: 'PUT',
                    href: 'https:api.ohgiraffers.com/api/v1/restaurant'
                }
            ]
        });
    }
}

exports.deleteRestaurant = async (req, res, next) => {
    const result = await RestaurantService.deleteRestaurant(req.params.resNo);

    if(result) {
        res.status(HttpStatus.OK).send({ //201
            status: HttpStatus.OK,
            message: 'DELETED',
            results: result
        });
    } else{
        //실패 시 응답 내용
        res.status(HttpStatus.BAD_REQUEST).send({
            status: HttpStatus.BAD_REQUEST,
            message: 'BAD_REQUEST',
            code: -666,
            results: [],
            links: [
                {
                    rel: 'restaurantDelete',
                    method: 'DELETED',
                    href: 'https:api.ohgiraffers.com/api/v1/menus'
                }
            ]
        });
    }
}