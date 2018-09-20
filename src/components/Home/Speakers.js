import React from 'react'
import SpeakersSection from '../Section/Section'
import { Link } from 'react-static'
import Speaker from './Speaker'
import { Text, Button } from '@aragon/ui'
import styled from 'styled-components'

const SpeakersBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: white;
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1195px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  a, button {
    color: #63B1F1;   
    font-size: 19px;  
    line-height: 27px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  max-width: 695px;
  margin: 70px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Speakers = () => (
  <SpeakersSection>
    <SpeakersBox>
      <div className="h1box"><h1>Speakers</h1></div>
      <Container>
        <Speaker photo="Luis Cuende" linkTo="luis" name="Luis Cuende" position="CEO" company="Aragon One"/>
        <Speaker photo="Primavera De Filippi" linkTo="primavera" name="Primavera De Filippi" position="Postdoctoral researcher" company="CNRS"/>
        <Speaker photo="Martin Koppelmann" linkTo="martin" name="Martin Köppelmann" position="Co-Founder" company="Gnosis"/>
        <Speaker photo="Jutta Steiner" linkTo="jutta" name="Jutta Steiner" position="Co-Founder" company="Parity Technologies"/>
        <Speaker photo="Maria Gomez" linkTo="maria" name="María Gómez" position="Ecosystem Development" company="Aragon One"/>
        <Speaker photo="Joe Urgo" linkTo="joe" name="Joe Urgo" position="Co-Founder" company="District0x"/>
        <Speaker photo="Raine Revere" linkTo="raine" name="Raine Revere" position="Co-founder" company="Maiden"/>
        <Speaker photo="Griff Green" linkTo="griff" name="Griff Green" position="Co-founder" company="Giveth & Aragon DAC"/>
      </Container>
      <Container>
          <Button>More speakers coming soon</Button>
          {/* 
            Removing link till we have more speakers to show
            <Button><Link to="/speakers">See more...</Link></Button>
           */}
      </Container>
      <TextContainer>
          <h2>Want to Speak at AraCon 2019?</h2>
          <p>If you would like to do a workshop or a talk at AraCon on anything related to governance, blockchain, future of work or borderless collaboration - You can just <Link to="/speakers#speakers-form">apply here</Link></p>
      </TextContainer>
    </SpeakersBox>
  </SpeakersSection>
);

export default Speakers
