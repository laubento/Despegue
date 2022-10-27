const { Router } = require("express");
const router = Router();
const utils = require('./utils/getOffers')
const {WebhookClient, Payload, Card} = require("dialogflow-fulfillment")

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

    function Ofertas(agent) {
        let conv = agent.conv(); // Get Actions on Google library conversation object
        conv.ask('Please choose an item:'); // Use Actions on Google library to add responses
        conv.ask(new Carousel({
          title: 'Google Assistant',
          items: {
            'WorksWithGoogleAssistantItemKey': {
              title: 'Works With the Google Assistant',
              description: 'If you see this logo, you know it will work with the Google Assistant.',
              image: {
                url: imageUrl,
                accessibilityText: 'Works With the Google Assistant logo',
              },
            },
            'GoogleHomeItemKey': {
              title: 'Google Home',
              description: 'Google Home is a powerful speaker and voice Assistant.',
              image: {
                url: imageUrl2,
                accessibilityText: 'Google Home'
              },
            },
          },
        }));
        // Add Actions on Google library responses to your agent's response
        agent.add(conv);
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