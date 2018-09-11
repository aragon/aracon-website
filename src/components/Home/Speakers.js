import React from 'react'
import SpeakersSection from '../Section/Section'
import Speaker from '../Speakers/Speaker'
import { Text, Button } from '@aragon/ui'
import styled from 'styled-components'

const SpeakersBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: white;
  text-align: center;
`

const Container = styled.div`
  width: 100%;
  max-width: 1195px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  a {
    color: #63B1F1;   
    font-size: 19px;  
    line-height: 27px;
  }
`

const TextContainer = styled.div`
  width: 100%;
  max-width: 695px;
  margin: 70px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Speakers = () => (
  <SpeakersSection>
    <SpeakersBox>
      <div className="h1box"><h1>Speakers</h1></div>
      <Container>
        <Speaker photo="speaker1" name="Name LastName" position="Founder" company="Company"/>
        <Speaker photo="speaker1" name="Name LastName" position="Founder" company="Company"/>
        <Speaker photo="speaker1" name="Name LastName" position="Founder" company="Company"/>
        <Speaker photo="speaker1" name="Name LastName" position="Founder" company="Company"/>
        <Speaker photo="speaker1" name="Name LastName" position="Founder" company="Company"/>
        <Speaker photo="speaker1" name="Name LastName" position="Founder" company="Company"/>
        <Speaker photo="speaker1" name="Name LastName" position="Founder" company="Company"/>
        <Speaker photo="speaker1" name="Name LastName" position="Founder" company="Company"/>
      </Container>
      <Container>
          <Button><a href="./speakers">See more...</a></Button>
      </Container>
      <TextContainer>
          <h2>Want to Speak at AraCon 2019?</h2>
          <p>If you would like to do a workshop or a talk at AraCon on anything related to governance, blockchain, future of work or borderless collaboration - send us an email at <a href="mailto:speakers@aragon.org">speakers@aragon.org</a></p>
      </TextContainer>
    </SpeakersBox>
  </SpeakersSection>
)

export default Speakers
