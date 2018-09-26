import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, SafeLink, theme } from '@aragon/ui'
import styled from 'styled-components'
import oval from '../components/Home/assets/oval.svg'

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
`;

const Registration = () => (
  <Page path="/registration">
    <Section className="all-page">
      <Container>
        <Text><div className="h1box"><h1>Registration</h1></div></Text>
        <Text size="xlarge">
          <h3>AraCon welcomes people from all backgrounds to join us at the flagship event of the Aragon Project.<br /><br />
          We have a portion of tickets initially reserved for Aragon community members, those who have supported and helped us get to this point in time that we can make AraCon a reality.</h3>
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
          <p><span className="strong">If you are not a member of the Aragon community yet, we are excited to meet you soon. To get your ticket, please register below!</span></p><br />
        </Text>
        <br />
        <div className="button-strong-div"><SafeLink className="button-strong" href="https://ti.to/aragon/aracon-one/" target="_blank"><span>Register here</span></SafeLink></div>
        <Text>
        <p><br />Need financial help attending AraCon?<br />
        We will be announcing a scholarship program in October to provide financial assistance for those in need.<br />
        <SafeLink href="https://eepurl.com/dHogTD" target="_blank">Subscribe to the AraCon email newsletter</SafeLink> to stay tuned for details</p>
        </Text>
    </Container>
    </Section>
  </Page>
);

export default Registration
