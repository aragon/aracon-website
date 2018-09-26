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
  .h1box {
    max-width: 1195px;
    margin: auto;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1195px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  a, button, p {
    color: #63B1F1;   
    font-size: 19px;  
    line-height: 27px;
  }
`;

const Speakers = () => (
  <SpeakersSection>
    <SpeakersBox>
      <div className="h1box xs-centered"><h1>Speakers</h1></div>
      <Container>
        <Speaker photo="Luis Cuende" linkTo="luis" name="Luis Cuende" position="CEO" company="Aragon One"/>
        <Speaker photo="Griff Green" linkTo="griff" name="Griff Green" position="Co-founder" company="Giveth & Aragon DAC"/>
        <Speaker photo="Jutta Steiner" linkTo="jutta" name="Jutta Steiner" position="Co-Founder" company="Parity Technologies"/>
        <Speaker photo="Santiago Siri" linkTo="santiago" name="Santiago Siri" position="Founder" company="Democracy Earth"/>
        <Speaker photo="Joe Urgo" linkTo="joe" name="Joe Urgo" position="Co-Founder" company="District0x"/>
        <Speaker photo="Primavera De Filippi" linkTo="primavera" name="Primavera De Filippi" position="Postdoctoral researcher" company="CNRS"/>
        <Speaker photo="Martin Koppelmann" linkTo="martin" name="Martin Köppelmann" position="Co-Founder" company="Gnosis"/>
        <Speaker photo="Maria Gomez" linkTo="maria" name="María Gómez" position="Ecosystem Development" company="Aragon One"/>
      </Container>
      <Container>
          <p>More speakers coming soon</p>
          {/* 
            Removing link till we have more speakers to show
            <Button><Link to="/speakers">See more...</Link></Button>
           */}
      </Container>
    </SpeakersBox>
  </SpeakersSection>
);

export default Speakers
