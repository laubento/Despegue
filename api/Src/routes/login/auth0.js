const { Router } = require("express");
const User = require("../../../models/user");

const router = Router();

router.post("/getUser", async (req, res) => {
    const { user } = req.body;

    console.log(user);

    if(!user) return res.status(400)

    User.findOne({ email: user.email }).then((resp) => {
        if (resp) {
            console.log("1er entrada" + resp);
            return res.status(200).send(resp);
        } else {
            // Si no existe lo agrego a la DB
            const newUser = new User({
                name: user.name,
                firstName: user.given_name,
                lastname: user.family_name,
                photo: user.picture,
                id: user.sub.slice("|")[1],
                password: "1",
                email: user.email,
                dni: "",
                phone: "",
                birthDate: "",
            });
            newUser.save()
            console.log('nuevo' + newUser);
            res.status(200).send(newUser);
        }
    });
});

// router.get("/", (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? "Logged In" : "Logged out");
// });
// router.get("/profile", requiresAuth(), (req, res) => {
//     console.log(req.oidc.user);
//     res.send(req.oidc.user);
// });

// router.get("/lo", (req, res) => {});

module.exports = router;
