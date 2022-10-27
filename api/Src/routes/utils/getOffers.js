const Offers = require('../../../models/offers')

const getOffers = async () => {
    try {
        const u = await Offers.find({active : true}).select('name price')
        
        return u
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getOffers
}