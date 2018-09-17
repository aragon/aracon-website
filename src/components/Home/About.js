import React from 'react'
import Section from '../Section/Section'
import { Text } from '@aragon/ui'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: white;
  text-align: center;
  p {
    max-width: 750px;
    margin: auto;
  }
  .h1box {
    justify-content: center;
  }
  iframe {
    max-width: 100%;
    border: transparent;
    height: auto;
    width: 740px;
    height: 269px;
  }
`;

const About = () => (
  <Section>
    <Container>
      <Text>
        <div className="h1box"><h1>About AraCon</h1></div>
      </Text>
      <Text>
        <p>#AraConOne brings together people from the Ethereum and Aragon communities keen on the decentralized web. Decentralized governance and DAOs are at the heart of this new Web3.0.  They are key components in moving towards a more fair and open world for everyone. We want to offer a place for the great minds in this space to share their thoughts and visions for this paradigm shift.</p>
        <p>By concentrating on a few themes, we can provide much deeper and thorough presentations on these topics.</p>
​        <p>Discover the emergence of new types of organizations with DAOs. </p>
        <p>Grasp what makes decentralized governance so relevant to the Web3.0.</p>
        <p>Understand how Ethereum is making the decentralized web a reality. </p>
        <p>See how Aragon is bringing about freedom for all with these revolutionary advancements.</p>
        <p>We invite everyone to come be a part of this growing movement and learn more on how we can #buidl this future together!</p>
      </Text>
      <br/>
      <iframe src="https://www.youtube.com/embed/AqjIWmiAidw"></iframe>
    </Container>
  </Section>
);

export default About
