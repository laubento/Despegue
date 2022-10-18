const helpers = {};

helpers.isAuthenticate = (req, res, next) => {
  if (req.isAuthenticated() && req.user.roles.includes("admin")) {
    return next();
  } else {
    res.redirect("http://localhost:3000/");
  }
};

module.exports = helpers;