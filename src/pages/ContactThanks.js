import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, SafeLink, theme, breakpoint } from '@aragon/ui'
import styled from 'styled-components'

const large = css => breakpoint('large', css);

const OuterContainer = styled.div`
  position: relative;
  max-width: 1540px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${large('justify-content: space-between; max-width: 1440px !important; margin: auto; flex-direction: row;')};
  padding-top: 40px;
  width: 83%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 695px;
  padding: 50px 0 50px 0;
  text-align: left;
  ${large('width: 41%;')};
  p {
    color: #dad7d7;
  }
`;

const ThanksContainer = styled.div`
  display: flex;
  align-items: center;
  ${large('justify-content: center;')};
  justify-content: flex-start;

  h3 {
    margin-bottom: 25px;
    line-height: 1.5;
    background: -webkit-linear-gradient(left,#7af7d0,#64b0f1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    text-align: left;
    ${large('text-align: center;')};
    max-width: 400px;
    margin-top: 70px;
  }
`;

const ContactThanks = () => (
  <Page path="/contact">
    <Section className="dark dark-form all-page">
      <OuterContainer>
        <Container>
          <Text><div className="h1box"><h1>Contact</h1></div></Text>
          <Text>
            <p>If you have any questions, ideas or suggestions, please contact us through the form. Someone from our team will be in touch with you shortly</p>
          </Text>
          <br/>
        </Container>
        <ThanksContainer>
          <h3>Thank you! Your message has been sent successfully.</h3>
        </ThanksContainer>
      </OuterContainer>
    </Section>
  </Page>
);

export default ContactThanks
