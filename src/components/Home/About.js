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
    text-align: justify;
  }
  .about_italic {
    text-align: center;
    font-style: italic;
  }
  .about_bold {
    color: #000;
    font-weight: bold;
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
        <p><a href="https://twitter.com/hashtag/AraConOne" target="_blank" rel="noopener noreferrer">#AraConOne</a> will bring together people who embody and wish to shape the Aragon community. Those who are building and supporting the pseudonymous, secure, trustless future — the decentralized web. Decentralized governance and DAOs are at the heart of the new Web 3.0.  They are key components in moving towards a more fair and open world for everyone. We want to offer a place for the great minds in this field to share their thoughts and understanding for this paradigm shift.</p><br />
        <p>By concentrating on a few themes, we can provide much deeper and thorough presentations on these topics.</p>
​        <p className="about_italic">Discover the emergence of new types of organizations with DAOs.</p><br />
        <p className="about_italic">Grasp what makes decentralized governance so relevant to the Web3.0.</p><br />
        <p className="about_italic">Understand how Ethereum is making the decentralized web a reality.</p><br />
        <p className="about_italic">See how Aragon is bringing about freedom for all with these revolutionary advancements.</p><br />
        <p className="about_bold">We invite everyone to come be a part of this growing movement and learn more about how we can build this future together!</p>
      </Text>
      <br/>
      <iframe src="https://www.youtube-nocookie.com/embed/AqjIWmiAidw?rel=0" allow="encrypted-media"  frameborder="0"></iframe>
    </Container>
  </Section>
);

export default About
