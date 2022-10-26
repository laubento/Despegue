const { Router } = require("express");

const axios = require('axios')

const router = Router();


//modificar esto
const apikey = process.env.API_KEY || "6356a9c62dc0fb23485050b1"

router.get('/from', async (req,res) => {
    const {nombre} = req.query
    let noIata = []
    let response = await axios.get(`https://api.flightapi.io/iata/${apikey}?name=${nombre}&type=airport`)
    let result = response.data.data.filter(e => e.iata.length)
    return res.json(result)
})

router.get('/to', async (req,res) => {
    const {nombre} = req.query
    let noIata = []
    let response = await axios.get(`https://api.flightapi.io/iata/${apikey}?name=${nombre}&type=airport`)
    let result = response.data.data.filter(e => e.iata.length)
    return res.json(result)
})

module.exports = router