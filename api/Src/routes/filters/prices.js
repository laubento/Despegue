const { Router } = require("express");
const router = Router();
const infoFlights = require("./../../API Mock/data");

router.post("/", (req, res) => {
  let { priceMin, priceMax } = req.body;
  if (priceMin && priceMax) {
    let filterPrices = infoFlights.filter(
      (e) => e.price >= priceMin && e.price <= priceMax
    );
    res.status(201).send(filterPrices);
  }
  res.status(400).send("Se requiere precio minimo y precio maximo");
});

module.exports = router;
