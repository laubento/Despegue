const { Router } = require("express");
const User = require("../../../models/user");
const auth = require('../admin/validate-session')

const router = Router();

router.post("/getUser", async (req, res) => {
    const { user } = req.body;
    console.log(user);

    if (!user) return res.sendStatus(400);

    console.log(user.email);

    User.findOne({ email: user.email })
    .then((userDB) => {
        console.log(userDB);
        if (userDB) {
            const userData = {
                name: userDB.name || userDB.nickname,
                firstName: userDB.firstName || userDB.nickname,
                lastname: userDB.lastname || undefined,
                photo: userDB.picture || userDB.photo,
                id: userDB.id,
                email: userDB.email,
                dni: userDB.dni || undefined,
                phone: userDB.phone || undefined,
                birthDate: userDB.birthDate || undefined,
                membership: userDB.membership || undefined,
                verifiy: userDB.verifiy || undefined,
                active: userDB.active,
                banned: userDB.banned,
                roles: userDB.roles || [],
            }
            console.log('te mando user');
            return res.status(200).send(userData);
        } else {
            // Si no existe lo agrego a la DB
            new User({
                name: user.name || user.nickname,
                firstName: user.given_name || user.nickname,
                lastname: user.family_name || null,
                photo: user.picture,
                id: user.sub.split("|")[1],
                email: user.email,
                password: '1',
                dni: "",
                phone: "",
                birthDate: "",
                membership: false,
                verifiy: false,
                active: true,
                banned: false
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
