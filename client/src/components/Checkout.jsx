import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
export default class Checkout extends React.Component {
  onToken = (token, addresses) => {
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.
    //redirect
    this.props.history.push("/");
  };

  render() {
    return (
      <StripeCheckout
        amount={this.props.price}
        billingAddress
        shippingAddress
        description="woof woof"
        currency="EUR"
        image=""
        locale="auto"
        name="Woofi Ltd."
        stripeKey="pk_test_ViicSjlSHJc9hdIoq2J8feHg00H2cAKMLf"
        token={this.onToken}
        zipCode
        label="Pay with credit card"
        panelLabel="Pay {{amount}}"
      />
    );
  }
}
