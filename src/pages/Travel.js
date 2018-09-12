import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import Map from '../components/Home/Map'
import styled from 'styled-components'
import { Text, Button, SafeLink, breakpoint } from '@aragon/ui'
import AccomodationImg from '../components/Home/assets/accomodation.png'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const AccomodationBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: white;
  text-align: center;
  .text {
    width: 100%;
    padding-left: 0;
    ${medium('width: 50%; padding-left: 40px;')};
    ${large('width: 40%; padding-left: 40px;')};
  }
  .image {
    width: 100%;
    ${medium('width: 50%;')};
    ${large('width: 60%;')};
    img {
      width: 100%;
    }
  }
  p, h2 {
    color: #18181A;
    text-align: left;
    margin-bottom: 30px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${medium('flex-direction: row;')};
`;

const AccomodationTriangle = styled.div`
  border-right: solid 100vw transparent;
  border-top: 15vh solid #1d1d2a;
  margin-top: -1px;
  background-color: transparent;
  z-index: 5;
  position:relative;
`;

const Travel = () => (
  <Page path="/travelinformation">
    <Map/>
    <AccomodationTriangle/>
    <Section>
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
    </Section>
  </Page>
);

export default Travel
