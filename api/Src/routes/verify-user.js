const verify = {};

verify.isAuthenticate = (req, res, next) => {
  if (req.isAuthenticated() && req.user.roles.includes("user")) {
    return next();
  } else {
    res.redirect("http://localhost:3000/");
  }
};

module.exports = verify;
