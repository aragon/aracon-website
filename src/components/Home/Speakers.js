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
  a, p {
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
        <Speaker photo="LuisCuende" linkTo="luis" name="Luis Cuende" position="CEO" company="Aragon One"/>
        <Speaker photo="GriffGreen" linkTo="griff" name="Griff Green" position="Co-founder" company="Giveth & Aragon DAC"/>
        <Speaker photo="JuttaSteiner" linkTo="jutta" name="Jutta Steiner" position="Co-Founder" company="Parity Technologies"/>
        <Speaker photo="AyaMiyaguchi" linkTo="ayam" name="Aya Miyaguchi" position="ED" company="Ethereum Foundation"/>
        <Speaker photo="LauraKalbag" linkTo="laura" name="Laura Kalbag" position="Author" company=" Accessibility for Everyone"/>
        <Speaker photo="JoeUrgo" linkTo="joe" name="Joe Urgo" position="Co-Founder" company="District0x"/>
        <Speaker photo="MariaGomez" linkTo="maria" name="María Gómez" position="Ecosystem Development" company="Aragon One"/>
        <Speaker photo="JordiBaylina" linkTo="jordi" name="Jordi Baylina" position="Tech Lead" company="Iden3"/>
      </Container>
      <Container>
        <p><Link to="/speakers">See all already confirmed speakers...</Link></p>
      </Container>
    </SpeakersBox>
  </SpeakersSection>
);

export default Speakers
