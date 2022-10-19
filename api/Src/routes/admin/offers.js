const { Router } = require("express");
const Offers = require("../../../models/offers");
const { isAuthenticate } = require("./validate-session");

const router = Router();

router.post("/", isAuthenticate, async (req, res) => {
  console.log(req.body)
  try {
    await Offers.create({
      airport: req.body.offer.airport,
      airlines: req.body.offer.airlines,
      scales: req.body.offer.scales,
      arrive: req.body.offer.arrive,
      departureDate: req.body.offer.departureDate,
      prevPrice: req.body.offer.prevPrice,
      price: req.body.offer.price,
      returnDate: req.body.offer.returnDate,
      from: req.body.offer.from,
      to: req.body.offer.to,
    });
    res.send("Oferta creada");
  } catch (e) {
    res.status(400).send("No se pudo crear la oferta");
  }
});

module.exports = router;
