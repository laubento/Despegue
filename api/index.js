const app = require("./Src/app.js");
const db = require("./Src/db.js");
// const jwt = require("express-jwt");
// const jwks = require("jwks-rsa");
// const guard = require("express-jwt-permissions")();

// const jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: "https://dev-ug1ke37sta0b1so8.us.auth0.com/.well-known/jwks.json",
//   }),
//   audience: "https:///www.despegue-api.com",
//   issuer: "https://dev-ug1ke37sta0b1so8.us.auth0.com/",
//   algorithms: ["RS256"],
// });

// app.use(jwtCheck);

// app.get("/authorized", guard.check(["read;despegue"]), (req, res) => {
//   res.send("Secured Resource");
// });

app.listen(process.env.PORT || 3001, () => {
  console.log("listening on port 3001");
  db();
});
