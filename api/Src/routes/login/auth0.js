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

router.post('/verify', (req, res) => {
    const {user} = req.body

    const options2 = {
        method: 'POST',
        url: 'https://dev-5n2ukjrth20df1by.us.auth0.com/oauth/token',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: '34BVaZdd7qQZdEElG7H4baI61D3oSzoP',
          client_secret: '{yourClientSecret}',
          audience: 'https://dev-5n2ukjrth20df1by.us.auth0.com/api/v2/'
        })
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });

    const options = {
        method: 'POST',
        url: `https://dev-5n2ukjrth20df1by.us.auth0.com/api/v2/jobs/verification-email`,
        headers: { 
            'content-type': 'application/json',
            "authorization": a
        },
        data: {
            user_id: user.sub,
          client_id: "F7456018hKT6q2IfLLoRlVcnZewaCpLJ",
        }
      };

    axios(options)
    .then((e) => {
        res.status(200).send('sent')
    })
    .catch((e) => {
        res.status(500).send('error')
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
