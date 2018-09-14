import React from 'react'
import MapSection from '../Section/Section'
import MapContainer from './MapContainer'
import styled from 'styled-components'
import { Text, breakpoint, SafeLink } from '@aragon/ui'
import Plane from './assets/plane.svg'
import Bus from './assets/bus.svg'
import backgroundImage from './assets/travel-background.png'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const MapBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: #1d1d2a;
  text-align: center;
  background-image: url(${backgroundImage});
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding-bottom: calc(50px + 6vw);
  clip-path: polygon(
    0 0, /* left top */
    100% 0, /* right top */ 
    100% calc(100% - 6vw), /* right bottom */
    0 100% /* left bottom */
  );
  .text {
    width: 100%;
    padding-right: 0;
    ${medium('width: 50%; padding-right: 40px;')};
    ${large('width: 40%; padding-right: 40px;')};
  }
  .map {
    width: 100%;
    ${medium('width: 50%;')};
    ${large('width: 60%;')};
  }
  p, h2 {
    color: white;
    text-align: left;
    margin-bottom: 20px;
    &.strong {
      font-weight: 700;
    }
    img {
      padding-right: 15px;
    }
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  ${medium('flex-direction: row;')};
`

const Map = () => (
  <MapSection>
    
    <MapBox>
      <Text>
        <div className="h1box">
          <h1>Travel</h1>
        </div>
      </Text>
      <Container>
        <div className="text">
          <SafeLink href="https://www.bolle-meierei.com/en/bollefestsaele/" target="_blank">
            <h2>BOLLE Festsale</h2>
          </SafeLink>
          <SafeLink href="https://goo.gl/maps/m4ZDRLs9oDR2" target="_blank">
            <p className="strong">Alt-Moabit 98, 10559 Berlin, Germany</p>
          </SafeLink>
          <p>The conference venue is located in the Spree-Bogen area in the heart of Berlin. It is easily accessible (by public transport or car) from central Berlin or Tegel airport.</p>
          <p className="strong">
            <img src={Bus}/>
            Public transport
          </p>
          <p>The closest metro stations are only few minutes walk away from the venue:<br/>U-Bahn (U9) - Turmstrasse (300m)<br/>S-Bahn (S3 / S7 / S9) - Bellevue (600m)</p>
          <p>Berlin Central Train Station (Hauptbanhof) is only one stop away via S-Bahn (10min) or six stops with bus 245 (5min).</p>
          <p className="strong">
            <img src={Plane}/>
            From the airport
          </p>
          <p>Tegel Airport is 20min away by TXL direct bus.</p>
        </div>
        <div className="map">
          <MapContainer
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_3Zo-VU8tXwUOgPJCQkGqgY7-eWQXzic&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `581px`, width: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </Container>
    </MapBox>
  </MapSection>
);

export default Map;
  
