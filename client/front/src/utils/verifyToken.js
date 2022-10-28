import axios from "axios";

const verifyToken = (user) => {
  const token = document.cookie.replace("token=", "");
  const mailOptions = {
    method: "POST",
    url: "https://dev-5n2ukjrth20df1by.us.auth0.com/api/v2/jobs/verification-email",
    headers: {
      "content-type": "application/json",
      "authorization": token,
    },
    data: {
      user_id: user.sub,
      client_id: "F7456018hKT6q2IfLLoRlVcnZewaCpLJ",
      identity: {
        user_id: user.sub.split("|")[1],
        provider: user.sub.split("|")[0],
      },
    },
  };

  axios(mailOptions).then((user) => {});
};
export default verifyToken;
