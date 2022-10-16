const express = require("express");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const index = require("./routes/index");
const session = require("express-session");
const passportLocal = require("passport-local").Strategy;
const cors = require("cors");
const passport = require("passport");
require("dotenv").config();
const { URI, USER, PASSWORD } = process.env;

const app = express();
require("./routes/login/passportConfig");

app.use(
  cookieSession({
    name: "session",
    keys: ["secretcode"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(morgan("dev"));
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });
// app.use(
//   cors({
//     origin: "https://localhost:3000",
//     credentials: true,
//   })
// );
// app.use(
//   session({
//     secret: "secretcode",
//     resave: true,
//     saveUninitialized: false,
//   })
// );
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "https://localhost:3000", // <-- location of the react app were connecting to
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
app.use("/", index);

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;
