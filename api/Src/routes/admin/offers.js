const { Router } = require("express");
const Offers = require("../../../models/offers");
const { isAuthenticate } = require("./validate-session");

const router = Router();

router.post("/", async (req, res) => {
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

router.get("/getoffers", async (req, res) => {
  try {
    const offers = await Offers.find({});
    if (offers.length) return res.send(offers);
    res.send("No hay ofertas disponibles");
  } catch (e) {
    res.status(400).send({ message: e });
  }
});

router.put("/offer", async (req, res) => {
  try {
    const { _id, prevPrice, price } = req.body.offer;
    if (!_id) return res.send("Datos incorrects");
    const offer = await Offers.updateOne(
      { _id: _id },
      { $set: { prevPrice: prevPrice, price: price } }
    );
    res.send("Oferta actualizada");
  } catch (e) {
    res.status(400).send("Datos no actualizados");
  }
});

module.exports = router;
