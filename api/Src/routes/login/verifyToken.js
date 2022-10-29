const jwt = require("jsonwebtoken");

const isUser = (req, res, next) => {
  const token = req.headers["authorization"];

  jwt.verify(token, "secretcode", (err, user) => {
    if (err) {
      return res.status(401).send({
        error: "Error al verificar el token",
      });
    }
    if (!user.roles.includes("user"))
      return res.status(403).send({ error: "No autorizado" });

    next();
  });
};

const isAdmin = (req, res, next) => {
  const token = req.headers["authorization"];
  jwt.verify(token, "secretcode", (err, user) => {
    if (err) {
      return res.status(401).send({
        error: "Error al verificar el token",
      });
    }
    if (!user.roles.includes("admin"))
      return res.status(403).send({ error: "No autorizado" });

    next();
  });
};

module.exports = {
  isAdmin,
  isUser,
};
