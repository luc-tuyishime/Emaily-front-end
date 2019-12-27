import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import * as styled from '../style/landing';
import FeedbackLogo from '../assets/opinion.png';

const Landing = () => {
  return (
    <Grid middle="true" aligned="true" centered columns={2}>
      <Grid.Column>
        <styled.DivEmaily>
          <styled.Img src={FeedbackLogo} alt="img" />
          <Header as="h1" textAlign="center">
            Emaily!
          </Header>
          <styled.Paragraph>Collect feedback from your users</styled.Paragraph>
        </styled.DivEmaily>
      </Grid.Column>
    </Grid>
  );
};

export default Landing;
