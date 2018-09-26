import React from 'react'
import Section from '../Section/Section'
import { Text, Button, SafeLink } from '@aragon/ui'
import styled from 'styled-components'
import { Link } from 'react-static'

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0 8.5% 50px 8.5%;
  background: white;
  text-align: center;
  p {
    max-width: 600px;
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
        <p>If you have any questions, ideas or suggestions, please contact us.</p>
        <p>Someone from our team will be in touch with you shortly.</p>
      </Text>
      <br/>
      <Button mode="strong">
        <Link to="/contact">Contact us</Link>
      </Button>
    </Container>
  </Section>
);

export default Contact
