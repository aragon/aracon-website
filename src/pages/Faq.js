import React from 'react'
import { Link } from 'react-static'
import { Page } from '../components'
import Section from '../components/Section/Section'
import Question from '../components/Faq/Question'
import { Text } from '@aragon/ui'
import styled from 'styled-components'

const FaqBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 80px 0;
  background: white;
  text-align: left;
  h2 {
    text-transform: uppercase;
    font-size: 22px;
    margin-bottom: 5px;
    color: #000000;
  }
  p {
    margin-bottom: 30px;
  }
  ul {
    margin-left: 22px;
  }
`;
const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 50px 8.5%;
  background: white;
`;

const Faq = () => (
  <Page path="/faq">
    <Section>
      <Container>
        <Text><div className="h1box"><h1>FAQ</h1></div></Text>
        <FaqBox>
          <Question question="What is AraCon?" answer={<p>AraCon is the flagship event of the Aragon Project. It is organised by the Aragon Foundation for the Aragon community and anyone interested in the decentralized web, governance, DAOs, and digital jurisdictions.</p>} />
          <Question question="When and where is AraCon happening?" answer={<p>AraCon is taking place on 29th-30th January 2019, at <a href="https://www.google.com/maps/place/BOLLE+Fests%C3%A4le/@52.52478,13.34647,15z/data=!4m2!3m1!1s0x0:0xecf15562de88eae5?sa=X&ved=2ahUKEwiJ_q-m99rcAhVBY1AKHW_0C2UQ_BIwDnoECAsQCw" target="_blank" rel="noopener noreferrer">Bolle Festsäle</a> in Berlin, Germany.</p>} />
          <Question question="Why should I attend AraCon?" answer={<p>AraCon will be the best place for you to get a great understanding of Web 3.0 and Aragon. You will discover the latest developments and glimpses of what&#39;s to come from our carefully planned program. Every speaker is passionate and deeply involved in creating this decentralized future.<br /><br />The event has four distinctive themes which we'll cover:<br /><br /><ul><li>Aragon</li><li>Web 3.0 / Ethereum</li><li>Decentralized Governance</li><li>DAOs</li></ul></p>} />
          <Question question="What makes AraCon different from other Blockchain events?" answer={<p>We aren't trying to cover all possible elements of blockchain technology or cryptocurrencies. We are focusing on what we know and see as fundamental pieces of this nascent technology and future.<br /><br />By concentrating on a few themes, we can provide much deeper and thorough presentations on these topics.<br /><br />This space is full of great minds who can eloquently express the shared vision we all have of a better future. Together with concrete lessons on how this technology is being built, the conference will provide you with a great overview of the decentralized web. Our goal for the event is that every attendee can feel and share the enthusiasm and excitement we have.<br /><br />Come for the content, stay for the community.</p>} />
          <Question question="Who will be speaking at AraCon?" answer={<p>There will be over 30 speakers, you can view all confirmed speakers <Link to="/speakers">here</Link>. We’ll be adding more speakers to the list soon. Speakers come from a variety of backgrounds and projects/companies like <a href="https://0xproject.com/" target="_blank" rel="noopener noreferrer">0x</a>, <a href="https://consensys.net" target="_blank" rel="noopener noreferrer">ConsenSys</a>, <a href="https://district0x.io/" target="_blank" rel="noopener noreferrer">district0x</a>, <a href="https://giveth.io/" target="_blank" rel="noopener noreferrer">Giveth</a>, <a href="https://gnosis.pm/" target="_blank" rel="noopener noreferrer">Gnosis</a> & <a href="https://www.parity.io/" target="_blank" rel="noopener noreferrer">Parity</a> among others.</p>} />
          <Question question="Where can I find the conference agenda for AraCon?" answer={<p>You
          can view the conference agenda <Link to="/agenda">here</Link> soon. Final agenda will be published some weeks before the event.</p>} />
          <Question question="How do I get to AraCon?" answer={<p>You can plan your route to
          AraCon by visiting the <Link to="/travelinformation">Travel Information page</Link>.</p>} />
          <Question question="Where can I stay during my visit to AraCon?" answer={<p>Our official
          hotel partner is Hotel Abion. If the official hotel gets booked out or you prefer to stay somewhere else, <a href="https://docs.google.com/document/d/1jDL6gBgGCi0g_i4y9Fb91EBV3dbsCB0FMWlFrXcsBsc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">here’s the list of hotels in the area</a>.</p>} />
          <Question question="How do I register for AraCon?" answer={<p>To learn more about registration process and fees, check out the <Link to="/registration">Registration page</Link>.</p>} />
          <Question question="What do I need to bring with me to AraCon?" answer={<p>All you need to bring is your ticket confirmation and lots of positive vibes.</p>} />
          <Question question="Can my company exhibit or speak at AraCon?" answer={<p>There will be no exhibition areas available. If you’d like to speak at AraCon, please submit your application <Link to="/speakers/#speakers-form">here</Link>.</p>} />
          <Question question="How can my company become an official partner of AraCon?" answer={<p>If you wish your company partner with the conference, contribute in any way, or organise a satellite event, please send us your proposal at <a href="mailto:info@aracon.org">info@aracon.org</a>.</p>} />
          <Question question="How can I contact the AraCon team?" answer={<p>You can contact the team via email <a href="mailto:info@aracon.org">info@aracon.org</a>.</p>} />
          <Question question="How can I follow AraCon on social media?" answer={<p>You can follow news and updates on AraCon on Twitter via <a href="https://twitter.com/AragonProject" target="_blank" rel="noopener noreferrer">@AragonProject</a> and the official hashtag <a href="https://twitter.com/hashtag/AraConOne" target="_blank" rel="noopener noreferrer">#AraConOne</a>.<br /><br />You can also <a href="https://eepurl.com/dHogTD" target="_blank" rel="noopener noreferrer">subscribe to the AraCon email newsletter here</a>.</p>} />
          <Question question="Will there be catering provided at AraCon?" answer={<p>There will be a catering area at the event for all your refreshment and lunch needs, and dinner on the first day of the event.</p>} />
          <Question question="Is there a dress code at AraCon?" answer={<p>There is no official dress code at AraCon. Our only requirement is that you are comfortable and your attire adheres to the <a href="https://wiki.aragon.org/documentation/Code_of_Conduct/" target="_blank" rel="noopener noreferrer">Code of Conduct</a>.</p>} />
          <Question question="Can I volunteer at AraCon?" answer={<p>Yes, we are looking for volunteers to help with different tasks during the conference. By volunteering at AraCon you can gain some event experience and grow your network in the crypto world. To apply to volunteer please <Link to="/volunteer">fill out this form</Link>.</p>} />
        </FaqBox>
      </Container>
    </Section>
  </Page>
);

export default Faq
