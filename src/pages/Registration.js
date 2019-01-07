import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, SafeLink, theme } from '@aragon/ui'
import styled from 'styled-components'
import oval from '../components/Home/assets/oval.svg'
import { Link } from 'react-static'

const Criteria = styled.ul`
  text-align: left;
  font-size: 19px;
  font-weight: 400;
  line-height: 1.5;
  list-style-image: url(${oval});
  list-style-position: inside;
  color: #707070
  a {
    color: #61B2F0;
  }
  a:hover {
    color: #0088f3;
  }
`;
const Container = styled.div`
  width: 100%;
  padding: 50px 8.5%;
  h3 {
    margin-bottom: 5px;
    margin-top: 10px;
  }

  a.button-strong2 {
    text-decoration: none;
    width: auto;
    padding: 10px 15px;
    margin-left: 15px;
    white-space: nowrap;
    line-height: 1;
    font-size: 15px;
    border: 0;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0,0,0,0);
    color: #FFFFFF;
    background-image: linear-gradient( 130deg,#562fbb,#be64d6 );
    display: flex;
    align-items: center;
    span {
      font-weight: 800;
    }
`;

const Registration = () => (
  <Page path="/registration">
    <Section className="white all-page">
      <Container>
        <Text><div className="h1box"><h1>Registration</h1></div></Text>
        <Text size="xlarge">
          <h3>Community ticket</h3>
          <p>We have a portion of tickets initially reserved for Aragon community members, those who have supported and helped us get to this point in time that we can make AraCon a reality.<br/> <br/></p>
        </Text>
        <Text>
          <p>Not sure whether you’re qualified for a Community ticket? These are the criteria:</p><br />
        </Text>
        <Criteria>
          <li>You have contributed to the development of the Aragon Project</li>
          <li>You’re actively participating in discussions on our official community chats (<SafeLink href="https://aragon.chat" target="_blank">https://aragon.chat</SafeLink> & <SafeLink href="https://research.aragon.org" target="_blank">https://research.aragon.org</SafeLink>)</li>
          <li>You have contributed in the creation of at least one Aragon Monthly issue</li>
          <li>You  organized an Aragon meetup or a similar event for the Aragon community, or presented Aragon at an external event</li>
          <li>You’re building an Aragon app</li>
          <li>You’re using Aragon to build your own DAO</li>
        </Criteria>
        <br />
        <Text>
          <p>If you meet one of the criteria above, please email us with the proof at <SafeLink href="mailto:info@aracon.one">info@aracon.one</SafeLink> and we will send you a registration link for a Community ticket.</p><br />
          <h3>General Admission - €150</h3>
          <p><span className="strong">If you are not a member of the Aragon community yet, we are excited to meet you soon. To get your ticket, please register below!</span></p><br />
        </Text>
        <br />
        <div className="button-strong-div">
          <SafeLink className="button-strong" href="https://ti.to/aragon/aracon-one/" target="_blank">
            <span>Pay with card</span>
          </SafeLink>
          <SafeLink className="button-strong2"
            href="https://commerce.coinbase.com/checkout/56fa004e-1d89-4b22-9a14-0bc1296c2656" target="_blank">
            <span>Pay with crypto</span>
          </SafeLink>
          <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807" />
        </div>
    </Container>
    </Section>
  </Page>
);

export default Registration
