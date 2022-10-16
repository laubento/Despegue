import axios from "axios";
import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Flights from "../Flights/Flights";

export default function Checkout(){

    const user = useSelector(state => state.currentUserInfo)

    const flightsData = useSelector(state => state.flightsData)

    console.log(user);
   
        return (
            <>
<h1>dsadas</h1>
            <PayPalButton
        options={{
            clientId: "AUTQWKW83h4_sO_FXl0PzPqTyY1_qLTd-gyC8JrX6oVn6r8zVWj9mXBVTkwOjkSMeRB8DH4BoZUGsVuf",
            currency: "EUR"
        }}
        amount={flightsData.price}
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
          console.log({details, data})

            // axios.post('/purchaseComplete', (user,flightsDetails))
          // OPTIONAL: Call your server to save the transaction
        //   return fetch("/paypal-transaction-complete", {
        //     method: "post",
        //     body: JSON.stringify({
        //       orderID: data.orderID
        //     })
        //   });
        }}
      />
            </>
    );
}