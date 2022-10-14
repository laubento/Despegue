import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

export default function Checkout(flight){

    return (
      <PayPalButton
        options={{
            clientId: "AUTQWKW83h4_sO_FXl0PzPqTyY1_qLTd-gyC8JrX6oVn6r8zVWj9mXBVTkwOjkSMeRB8DH4BoZUGsVuf",
            currency: "USD"
        }}
        amount='10'
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
          console.log({details, data})

          // OPTIONAL: Call your server to save the transaction
        //   return fetch("/paypal-transaction-complete", {
        //     method: "post",
        //     body: JSON.stringify({
        //       orderID: data.orderID
        //     })
        //   });
        }}
      />
    );
}