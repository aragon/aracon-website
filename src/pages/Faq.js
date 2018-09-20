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
  padding: 80px 8.5%;
  background: white;
  text-align: left;
  h2 {
    text-transform: uppercase;
    color: rgb(0, 203, 230);
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 5px;
  }
  p {
    margin-bottom: 30px;
  }
`;
const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 50px 8.5%;
  background: #18181A;
`;

const Faq = () => (
  <Page path="/faq">
    <Section>
    <Container>
        <Text><div className="h1box"><h1>FAQ</h1></div></Text>
        <FaqBox>
          <Question question="What is AraCon?" answer={<p>AraCon is the flagship event of the Aragon 
            Project. It is organised by Aragon Foundation for the Aragon community and anyone 
            interested in governance on blockchain, DAOs and digital jurisdictions.</p>} />
          <Question question="When and where is AraCon happening?" answer={<p>AraCon is taking place 
            on 29th-30th January 2019, at Bolle Festsäle in Berlin, Germany.</p>} />
          <Question question="Is AraCon free-to-attend?" answer={<p>AraCon is free to attend for 
            Aragon community. To make sure you’re eligible for a free ticket, please check if you 
            meet one of the criteria <Link to="/registration">here</Link>.</p>} />
          <Question question="Where can I find the conference agenda for AraCon?" answer={<p>You 
            can view the conference agenda <Link to="/agenda">here</Link></p>} />
          <Question question="How do I get to AraCon?" answer={<p>You can plan your route to 
            AraCon by visiting the <Link to="/travelinformation">Travel Information page</Link></p>} />
          <Question question="Where can I stay during my visit to AraCon?" answer={<p>Our official 
            hotel partner is Hotel Abion. If the official hotel gets booked out or you prefer to stay 
            somewhere else, here’s the list of hotels in the area.</p>} />
          <Question question="How do I register for AraCon?" answer={<p>To learn more about registration 
            process and fees, check out the <Link to="/registration">Registration page</Link></p>} />
          <Question question="What do I need to bring with me to AraCon?" answer={<p>All you need to bring 
            is your ticket confirmation and lots of positive vibes</p>} />
          <Question question="Can my company exhibit or speak at AraCon?" answer={<p>There will be no exhibition 
            areas available, except for the projects from Aragon’s <a href="https://github.com/aragon/nest">Nest 
            program</a>. If you’d like to speak at AraCon, please submit your application  
            <Link to="/speakers">here</Link></p>} />
          <Question question="How can my company become an official partner of AraCon?" answer={<p>If you wish 
            your company partner with the conference, contribute in any way, or organise a satellite event, 
            please send us your proposal at <a href="mailto:info@aracon.org">info@aracon.org</a>.</p>} />
        </FaqBox>
      </Container>
    </Section>
  </Page>
);

export default Faq