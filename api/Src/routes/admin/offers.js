const { Router } = require("express");
const Offers = require("../../../models/offers");
const { isAuthenticated } = require("./validate-session");

const router = Router();

router.post("/", isAuthenticated, async (req, res) => {
  try {
    await Offers.create({
      airport: req.body.airport,
      airlines: req.body.airlines,
      scales: req.body.scales,
      arrive: req.bodyarrive,
      departureDate: req.body.departureDate,
      prevPrice: req.body.prevPrice,
      price: req.body.price,
      returnDate: req.body.returnDate,
      from: req.body.from,
      to: req.body.to,
    });
    res.send("Oferta creada");
  } catch (e) {
    res.status(400).send("No se pudo crear la oferta");
  }
});

module.exports = router;
