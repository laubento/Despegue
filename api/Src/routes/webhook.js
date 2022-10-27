const { Router } = require("express");
const router = Router();
const utils = require('./utils/getOffers')
const {WebhookClient, Payload, Card, Platforms} = require("dialogflow-fulfillment")
const { Carousel } = require('actions-on-google')

const u = {
    "fulfillmentMessages": [
      {
        "text": {
          "text": [
            "Text response from webhook"
          ]
        }
      }
    ]
  }


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

    // async function Ofertas(agent) {
    //     agent.add(`Aca las ofertas!`);
    //     const ofertas = await utils.getOffers()
    //     const ofertas2 = ofertas.map((e) => e.name + " " + e.price).join("  \n")
    //     // ofertas.map((oferta) => agent.add(oferta.name + " " + oferta.price))
    //     agent.add(u)
    //   }

    async function Ofertas(agent) {        
       const payload = 
            {
            type: "link",
            url: "https://despegue.vercel.app/help",
            openLinkInNewTab: false,
            name: "Reactivar Cuenta"
            }
        agent.add('Aca las ofertas')
        const ofertas = await utils.getOffers()
        const ofertas2 = ofertas.map((e) => e.name + " " + e.price).join("\n")
        agent.add(ofertas2)
        // agent.add(new Payload(agent.UNSPECIFIED, payload, { rawPayload: false, sendAsMessage: true }))
      }
  
  let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('Ofertas', Ofertas);
    // intentMap.set('your intent name here', yourFunctionHandler);
    // intentMap.set('your intent name here', googleAssistantHandler);
    agent.handleRequest(intentMap);
})

// agent.add(new Card({
//     title: `Title: this is a card title`,
//     imageUrl: "https://thumbs.dreamstime.com/b/plane-flying-high-altitude-above-clouds-model-passenger-alps-mountains-background-163759416.jpg",
//     text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
//     buttonText: 'This is a button',
//     buttonUrl: "https://google.com"
//   })
// );

        //     messages: [
        //     {
        //         payload: {
        //         messages: [
        //             {
        //             speech: 'here are some quick links for your convenience.',
        //             linkmessage: [{
        //                 message: 'google',
        //                 link: 'www.google.com'
        //             }, {
        //                 message: 'yahoo',
        //                 link: 'www.yahoo.co.in'
        //             }],
        //             button: [{
        //                 buttonname: 'more page'
        //             }]
        //             }
        //         ]
        //         }
        //     }
        //     ]
        // };
        // agent.add(new Payload(agent.UNSPECIFIED, response, { rawPayload: true, sendAsMessage: true}));
    




module.exports = router;