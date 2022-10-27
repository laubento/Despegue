const { Router } = require("express");
const router = Router();
const utils = require('./utils/getOffers')
const {WebhookClient} = require("dialogflow-fulfillment")


router.get('/', async(req, res) => {
    const ofertas = await utils.getOffers()
    const ofertas2 = ofertas.map((e) => e.name + " " + e.price).join(", ")
    console.log(ofertas2);
})

router.post('/', (req, res) => {

    const agent = new WebhookClient({ request: req, response: res });
    console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(req.body));
   
    function welcome(agent) {
      agent.add(`Welcome to my agent!`);
    }
   
    function fallback(agent) {
      agent.add(`I didn't understand`);
      agent.add(`I'm sorry, can you try again?`);
    }

    async function Ofertas(agent) {
        agent.add(`Aca las ofertas!`);
        const ofertas = await utils.getOffers()
        const ofertas2 = ofertas.map((e) => e.name + " " + e.price).join("  \n")
        // ofertas.map((oferta) => agent.add(oferta.name + " " + oferta.price))
        agent.add(ofertas2)
      }
  
  let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('Ofertas', Ofertas);
    // intentMap.set('your intent name here', yourFunctionHandler);
    // intentMap.set('your intent name here', googleAssistantHandler);
    agent.handleRequest(intentMap);
})



module.exports = router;