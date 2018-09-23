import React from 'react'
import Section from '../Section/Section'
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
  text-align: center;
  background: white;
  padding-bottom: 0;

  .text {
    width: 100%;
    padding-left: 0;
    ${medium('width: 50%; padding-left: 40px;')};
    ${large('width: 40%; padding-left: 40px;')};
  }
  .map {
    width: 100%;
    ${medium('width: 50%;')};
    ${large('width: 60%;')};
  }
  p, h2 {
    text-align: center;
    ${medium('text-align: left;')};
    margin-bottom: 20px;
    &.strong {
      font-weight: 700;
    }
    img {
      padding-right: 15px;
    }
  }
  p.strong {
    display: flex;
    flex-direction: column;
    ${medium('display: inherit;')};
    img {
      padding-bottom: 6px;
      ${medium('padding-bottom: 0;')};
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
  <Section className="white">  
    <MapBox>
      <Container>
        <div className="map">
          <MapContainer
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_3Zo-VU8tXwUOgPJCQkGqgY7-eWQXzic&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `581px`, width: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className="text">
          <Text>
            <div className="h1box xs-centered">
              <h1>Getting there</h1>
            </div>
          </Text>
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
        
      </Container>
    </MapBox>
  </Section>
);

export default Map;
  
