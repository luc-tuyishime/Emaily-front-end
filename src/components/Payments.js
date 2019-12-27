import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    console.log('properties', this.props);
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 emails credits"
        amount={500}
        token={token => this.props.handleToken(token)} // authorization charge or token we got back from stripe after sending details to stripe
        stripeKey={process.env.REACT_APP_STRIPE_KEY}>
        <Button color="blue">ADD CREDITS</Button>
      </StripeCheckout>
    );
  }
}

// token is the object that represent the entire charge. and after we send to our API

export default connect(
  null,
  actions
)(Payments);
