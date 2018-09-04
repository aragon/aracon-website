import React from 'react'
import LandingSection from '../Section/LandingSection'
import styled from 'styled-components'
import { Text, Button, SafeLink } from '@aragon/ui'
import AccomodationImg from './assets/accomodation.png'

const AccomodationBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: white;
  text-align: center;
  .text {
    width: 40%;
    padding-left: 40px;
  }
  .image {
    width: 60%;
    img {
      width: 100%;
    }
  }
  p, h2 {
    color: #18181A;
    text-align: left;
    margin-bottom: 30px;
  }
  
`

const Content = styled.div`
  width: 100%;
  display: flex;
`

const Accomodation = () => (
  <LandingSection>
    <AccomodationBox>
      <div className="h1box"><h1>Accomodation</h1></div>
      <Content>
        <div className="image">
          <img src={AccomodationImg} alt="" />
        </div>
        <div className="text">
          <Text size="xlarge">
            <h2>Berlin ABION Hotel</h2>
          </Text>
          <Text>
            <p>Alt-Moabit 98, 10559, Berlin, Germany</p>
          </Text>
          <Text>
            <p>The official conference hotel is located just 100m away from the venue.  It has a unique, direct view of the River Spree and a superb location at the heart of the capital city between the West Centre (Ku’damm) and the East Centre (Alexanderplatz). To join our speakers and other guests, book your stay by clicking on the button below.</p>
          </Text>
          <Button mode="strong"><SafeLink href="https://www.google.es/" target="_blank">Book your stay</SafeLink></Button>
          <Text>
            <p><br/>Prices are ‎€109 for a single room and ‎€119 for a double room per night, breakfast included. All rooms are subject to availability. Special price is valid for all bookings between xx-xx.</p>
          </Text>
        </div>
      </Content>
    </AccomodationBox>
  </LandingSection>
)

export default Accomodation