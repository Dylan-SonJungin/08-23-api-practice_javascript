class RestaurantDTO {
    resName;
    category;
    rate;

    constructor(data) {
        this.resName = data.resName;
        this.category = data.category;
        this.rate = data.rate;
    }
}

module.exports = RestaurantDTO;