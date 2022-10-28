const axios = require('axios');

const getToken = async () => {

    let token
    const tokenOptions = {
        method: "POST",
        url: "https://dev-5n2ukjrth20df1by.us.auth0.com/oauth/token",
        headers: { "content-type": "application/json" },
        data: {
            client_id: "oA7zX2g8LLcgo6Yb0u1Kk0nO2mPlDeom",
            client_secret: "t2tdD39fS3r-H8fsjnWOaVtbafYg4jbx2jGpY2SIxMSb_4t-CgD0mQ33odtDR7uI",
            audience: "https://dev-5n2ukjrth20df1by.us.auth0.com/api/v2/",
            grant_type: "client_credentials",
        },
    };
    await axios(tokenOptions)
        .then((response) => { return response.data })
        .then((response) => {
            token = response.token_type + " " + response.access_token
        })
        .catch((e) => {
            console.log(e);
        })
    console.log(token);
    return token
}

module.exports = {
    getToken
}