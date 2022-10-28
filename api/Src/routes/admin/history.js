const { Router } = require("express");
const router = Router();
const { isAuthenticated } = require("./validate-session");
const History = require('../../../models/history')

router.get("/", async (req, res) => {
    try {
        let history = await History.find({}).select('package -_id');
        let income = history.map(el =>{
            let price = 0;
            el.package.forEach(e => {
               price += Number(e.price);
            });
            return price
        })
        
        res.send(income);
    } catch (e) {
        res.status(400).send("GET/ADMIN/USERS");
    }
});

module.exports = router;