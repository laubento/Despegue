const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
  if (req.user.roles.includes("admin")) {
    return next();
  } else {
    res.redirect(process.env.HOME_URL ||'http://localhost:3000');
  }
};

helpers.isUser = (req, res, next) => {

    console.log('ho');

    const {user} = req.body

    console.log(user);
    
    if(!user || !user.roles.length || !user.roles.includes("user")) return res.redirect(process.env.HOME_URL || "http://localhost:3000")
    
    return next()
}


module.exports = helpers;