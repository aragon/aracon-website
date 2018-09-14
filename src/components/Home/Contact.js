import React from 'react'
import Section from '../Section/Section'
import { Text, Button, SafeLink } from '@aragon/ui'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: white;
  text-align: center;
  p {
    max-width: 500px;
    margin: auto;
  }
`;

const Contact = () => (
  <Section>
    <Container>
      <Text>
        <h2>Contact us</h2>
      </Text>
      <Text>
        <p>If you have any questions, ideas or suggestions, please contact us through the button below. Someone from our team will be in touch with you shortly</p>
      </Text>
      <br/>
      <Button mode="strong">
        <SafeLink href="mailto:info@aracon.com" target="_blank">Contact us</SafeLink>
      </Button>
    </Container>
  </Section>
);

export default Contact
