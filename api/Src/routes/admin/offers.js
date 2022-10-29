const { Router } = require("express");
const Offers = require("../../../models/offers");
const { isAdmin } = require("../login/verifyToken");

const router = Router();

router.post("/", isAdmin, async (req, res) => {
  // console.log(req.body)
  try {
    await Offers.create({
      image: req.body.image,
      day: req.body.day,
      nigth: req.body.nigth,
      name: req.body.name,
      dateFrom: req.body.dateFrom,
      dateTo: req.body.dateTo,
      nameAirportFrom: req.body.nameAirportFrom,
      nameAirportTo: req.body.nameAirportTo,
      asistans: req.body.asistans,
      rating: req.body.rating,
      price: req.body.price,
    });
    res.send("Oferta creada");
  } catch (e) {
    res.status(400).send("No se pudo crear la oferta");
  }
});

router.get("/getoffers", isAdmin, async (req, res) => {
  try {
    const offers = await Offers.find({ active: true });

    if (offers.length) return res.send(offers);
    res.send("No hay ofertas disponibles");
  } catch (e) {
    res.status(400).send({ message: e });
  }
});

router.put("/offer", isAdmin, async (req, res) => {
  try {
    const { _id, price } = req.body.offer;
    if (!_id) return res.send("Datos incorrects");
    const offer = await Offers.updateOne(
      { _id: _id },
      { $set: { price: price } }
    );
    res.send("Oferta actualizada");
  } catch (e) {
    res.status(400).send("Datos no actualizados");
  }
});

router.put("/delete", isAdmin, (req, res) => {
  const { _id } = req.body;

  Offers.updateOne(
    { _id: _id },
    {
      $set: { active: false },
    }
  ).catch((er) => {
    console.log(er);
  });
});

module.exports = router;
