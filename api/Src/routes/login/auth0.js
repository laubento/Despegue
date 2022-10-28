const { Router } = require("express");
const User = require("../../../models/user");
const auth = require('../admin/validate-session')

const router = Router();

router.post("/getUser", async (req, res) => {
    const { user } = req.body;
    console.log(user);

    if (!user) return res.sendStatus(400);

    User.findOne({ email: user.email }).select('-password')
    .then((userDB) => {
        if (userDB) {
            console.log(userDB);
            const userData = {
                name: userDB.name || userDB.nickname,
                firstName: userDB.firstName || userDB.nickname,
                lastName: userDB.lastName || "",
                dni: userDB.dni,
                phone: userDB.phone,
                birthDate: userDB.birthDate,
                photo: userDB.picture || userDB.photo,
                banned: userDB.banned,
                membership: userDB.membership,
                email: userDB.email,
                active: userDB.active,
                roles: userDB.roles,
                verify: userDB.verify,
                id: userDB.id,
                sub: userDB.sub ? userDB.sub : user.sub
            }
            return res.status(200).send(userData);
        } else {
            // Si no existe lo agrego a la DB
            new User({
                name: user.name || user.nickname,
                firstName: user.given_name || user.nickname,
                lastName: user.family_name,
                photo: user.picture,
                email: user.email || "",
                dni: "",
                phone: "",
                birthDate: "",
                membership: false,
                verify: user.email_verified || false,
                active: true,
                banned: false,
                sub: user.sub
            })
            .save()
            .then((newUser) => {
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
