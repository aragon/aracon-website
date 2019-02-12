import React from 'react'
import Section from '../Section/Section'
import {Text, SafeLink, breakpoint} from '@aragon/ui'
import styled from 'styled-components'
import image1 from './assets/icon_01.svg'
import image2 from './assets/icon_02.svg'
import image3 from './assets/icon_03.svg'
import image4 from './assets/icon_04.svg'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Container = styled.div `
  width: 100%;
  margin: 0;
  padding: 50px 8.5% 92px 8.5%;
  background: white;
  text-align: center;

  .intro {
    max-width: 600px;
    margin: auto;
    font-size: 23px;
    font-weight: 300;
    line-height: 1.42;
    color: #45494d;
    a {
      font-weight: bold;
      color: #44c9e6;
    }
  }
  iframe {
    max-width: 100%;
    border: transparent;
    height: auto;
    width: 740px;
    height: 269px;
  }
  .hr {
    width:100%;
    height: 2px;
    margin-bottom: 92px;
    background-color: #eef3f7;
  }
  }
  .intro2 {
    max-width: 100%;
    margin: auto;
    font-size: 23px;
    font-weight: 300;
    line-height: 1.42;
    color: #45494d;
`;

const AboutBox = styled.div `
  display: flex;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  margin: 50px 0;
  div.container {
    padding: 30px;
    width: 100%;
    ${medium('width: 25%;')};
    .image-box {
      height: 92px;
      text-align: center;
      ${medium('text-align: center;')};
    }
    p {
      font-size: 18px;
      font-weight: 300;
      line-height: 1.63;
      color: #000000;
      text-align: center;
      ${medium('text-align: center;')};
    }
  }
`;

const VideoBox = styled.div `
  display: flex;
  flex-direction: column;
  ${medium('flex-direction: row;justify-content: center;')};
  align-items: center;

  .text-container {
    padding: 30px 0;
    max-width: 1100px;
    ${medium('padding: 0 30px')};
    text-align: left;
    p {
      max-width: inherit;
    }
  }
`;

const About = () => (<Section>
  <Container>
    <Text>
      <p className="intro">The Aragon Conference will bring together people who embody and wish to shape the Aragon community. Those who are building and supporting the pseudonymous, secure, trustless future — the decentralized web.</p><br/>
      <p className="intro">Decentralized governance and DAOs are at the heart of the new Web 3.0. They are key components in moving towards a more fair and open world for everyone.</p>
      <br/>
      <p className="intro2">By concentrating on a few themes, we can provide much deeper and thorough presentations on these topics.</p>
    </Text>
    <AboutBox>
      <div className="container">
        <div className="image-box"><img src={image1}/></div>
        <p>Discover the emergence of new types of organizations with DAOs.</p>
      </div>
      <div className="container">
        <div className="image-box"><img src={image2}/></div>
        <p>Grasp what makes decentralized governance so relevant to Web3.0.</p>
      </div>
      <div className="container">
        <div className="image-box"><img src={image3}/></div>
        <p>Understand how Ethereum is making the decentralized web a reality.</p>
      </div>
      <div className="container">
        <div className="image-box"><img src={image4}/></div>
        <p>See how Aragon is bringing freedom for all with these revolutionary advancements.</p>
      </div>
    </AboutBox>
    <div className="hr"/>
    <VideoBox>
      <div>
        <iframe title="AraCon" src="https://www.youtube-nocookie.com/embed/yeK2H4jT5Jk?rel=0" allow="encrypted-media" frameBorder="0"/>
      </div>
      <div className="text-container">
        <Text>
          <p className="intro">Over 500 community members and DAO enthusiasts gathered in Berlin for AraCon. They got an overview of the state of decentralized governance and how Aragon empowers global organizations. The many speakers all presented fresh and exciting aspects of these critical issues.</p><br/>
          <p className="intro">
            <b><a href="https://mainnet.aragon.org/#/" target="_blank">Try out Aragon for yourself</a> to see a glimpse of the future of governance.</b>
          </p>
          <br/>
          <p className="intro">
            <SafeLink href="https://twitter.com/hashtag/AraCon2019" target="_blank">#AraCon2019</SafeLink>
          </p>
        </Text>
      </div>
    </VideoBox>

  </Container>
</Section>);

export default About
