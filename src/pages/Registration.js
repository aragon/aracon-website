import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, SafeLink, theme, Button } from '@aragon/ui'
import styled from 'styled-components'

const Criteria = styled.ul`
  text-align: left;
  margin: 22px;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  color: #707070;
  a {
    color: #61B2F0;
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
          <h3>AraCon welcomes people from all backgrounds to join us at the flagship event of the Aragon Project. We have a portion of tickets initially reserved for Aragon community members, those who have supported and helped us get to this point in time that we can make AraCon a reality.</h3>
        </Text>
        <Text>
          <p>Not sure whether you’re qualified for a Community ticket? These are the criteria:</p><br />
        </Text>
        <Criteria>
          <li>You are an Aragon Network Token holder</li>
          <li>You have contributed to the development of the Aragon Project</li>
          <li>You’re actively participating in discussions on our official community chats (<a href="https://aragon.chat" target="_blank" rel="noopener noreferrer">https://aragon.chat</a> & <a href="https://research.aragon.org" target="_blank" rel="noopener noreferrer">https://research.aragon.org</a>)</li>
          <li>You have contributed in the creation of at least one Aragon Monthly issue</li>
          <li>You  organized an Aragon meetup or a similar event for the Aragon community, or presented Aragon at an external event</li>
          <li>You’re building an Aragon app</li>
          <li>You’re using Aragon to build your own DAO</li>
        </Criteria>
        <Text>
          <p>If you meet one of the criteria above, please email us with the proof at <SafeLink href="mailto:info@aracon.org">info@aracon.org</SafeLink> and we will send you a registration link for a Community ticket.</p><br />
          <p><span className="strong">If you are not a member of the Aragon community yet, we are excited to meet you soon. To get your ticket, please register below!</span></p><br />
        </Text>
        <br />
        <Button mode="strong"><SafeLink href="https://ti.to/aragon/aracon-one/" target="_blank">Register here</SafeLink></Button>
        <Text>
        <p><br />Need financial help attending AraCon?<br />
        We will be announcing a scholarship program in October to provide financial assistance for those in need.<br />
        <a href="https://eepurl.com/dHogTD" target="_blank" rel="noopener noreferrer">Subscribe to the AraCon email newsletter</a> to stay tuned for details</p>
        </Text>
    </Container>
    </Section>
  </Page>
);

export default Registration
