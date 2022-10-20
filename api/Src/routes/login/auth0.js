const { Router } = require("express");
const User = require("../../../models/user");
const auth = require('../admin/validate-session')

const router = Router();

router.post("/getUser", async (req, res) => {
    const { user } = req.body;

    if (!user) return res.sendStatus(400);

    User.findOne({ email: user.email })
    .then((resp) => {
        if (resp) {
            console.log("1er entrada" + resp);
            return res.status(200).send(resp);
        } else {
            // Si no existe lo agrego a la DB
            new User({
                name: user.name || user.nickname,
                firstName: user.given_name || user.nickname,
                lastname: user.family_name || null,
                photo: user.picture,
                id: user.sub.slice("|")[1],
                email: user.email,
                dni: "",
                phone: "",
                birthDate: "",
            })
            .save()
            .then((newUser) => {
                console.log("nuevo" + newUser);
                res.status(200).send(newUser);
            })
            .catch((err) => {
                console.log("CATCH AUTH0" + err);
                res.status(400).send("No se pudo crear");
            });
        }
    })
});

router.put('/delete',auth.isUser,(req, res) => {

    const {user} = req.body

    User.updateOne({_id: user.id, email: user.email}, {
        $set: {active: false}
    })
    .catch((er) =>{
        console.log(er);
    })
})


// router.get("/", (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? "Logged In" : "Logged out");
// });
// router.get("/profile", requiresAuth(), (req, res) => {
//     console.log(req.oidc.user);
//     res.send(req.oidc.user);
// });

// router.get("/lo", (req, res) => {});

module.exports = router;
