const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");
const User = require("../../models/user");
const infoTransporter = require("../routes/utils/mailer");
const { isUser, isAdmin } = require("./login/auth/verifyToken");
const fs = require("fs");

router.put("/membership", isUser, async (req, res) => {
  const { id } = req.body;
  console.log(req.body);
  try {
    await User.updateOne({ _id: id }, { $set: { membership: true } });
    res.status(201).send({
      message: "El usuario ahora es miembro",
    });
  } catch (e) {
    res.status(400).send({
      message: "CATCH/membership",
    });
  }
});

router.put("/membershipDisable", isUser, async (req, res) => {
  const { id } = req.body;
  console.log(req.body);
  try {
    await User.updateOne({ _id: id }, { $set: { membership: false } });
    res.status(201).send({
      message: "El usuario ya no es miembro",
    });
  } catch (e) {
    res.status(400).send({
      message: "CATCH/membership",
    });
  }
});

router.get("/dispatchEmail", isAdmin, async (req, res) => {
  User.find({ membership: true }).then((data) => {
    const emails = data.map((el) => {
      return { mail: el.email, name: el.firstName };
    });
    emails.forEach((el) => {
      infoTransporter(
        "nehuenxtreem6@gmail.com",
        el.mail,
        "Ofertas Para Miembros!",
        `
            <body style="margin:0;padding:0;">
            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
              <tr>
                <td align="center" style="padding:0;">
                  <table role="presentation" style="width:602px;border-collapse:collapse;border:2px solid #000000;border-spacing:0;text-align:center;">
                    <div>
                      <div align="center" style="padding:40px 0 30px 0;background:#d4d4d4;">
                        <img src="https://i.postimg.cc/T3Kj5Sqx/Logo.png" alt="" width="300" style="height:auto;display:block;" />
                      </div>
                    </div>
                    <tr>
                      <td style="padding:36px 30px 42px 30px;">
                        <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                          <tr>
                            <td style="padding:0 0 36px 0;color:#153643;;">
                              <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;align-items: center;">Despegue Offers!</h1>
                              <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"></p>
                              <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><a href="http://www.example.com" style="color:#ee4c50;text-decoration:underline;"></a></p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:0;">
                              <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                <tr>
                                  <td style="width:260px;padding:0;vertical-align:top;color:#153643;">
                                    <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;text-align: left;">Hello! <span id="username">${el.name}</span></p>
                                    <p style="margin:0 0 25px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif; text-align: left;">Please checkout Despegue.com! We have new special offers for our bests members!</p>
                                    <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><a href="http://www.example.com" style="color:#ee4c50;text-decoration:underline;"></a></p>
                                  </td>
                                  <td style="width:20px;padding:0;font-size:0;line-height:0;">&nbsp;</td>
                                  <td style="width:260px;padding:0;vertical-align:top;color:#153643;">
                                    <p style="margin:0 0 25px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"></p>
                                    <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"></p>
                                    <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><a href="http://www.example.com" style="color:#ee4c50;text-decoration:underline;"></a></p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:30px;background: #0085FF;">
                        <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                          <tr>
                            <td style="padding:0;width:50%;" align="left">
                            </td>
                            <td style="padding:0;width:50%;" align="right">
                              <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                                <tr>
                                  <td style="padding:0 0 0 10px;width:38px;">
                                    <a href="http://www.twitter.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/tw_1.png" alt="Twitter" width="38" style="height:auto;display:block;border:0;" /></a>
                                  </td>
                                  <td style="padding:0 0 0 10px;width:38px;">
                                    <a href="http://www.facebook.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/fb_1.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
          `
      );
    });

    res.status(200).send(data);
  });
});

module.exports = router;
