import React from 'react'
import MapSection from '../Section/Section'
import MapContainer from './MapContainer'
import styled, { css } from 'styled-components'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const MapBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: #1d1d2a;
  text-align: center;
  display: flex;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  .text {
    width: 100%;
    padding-right: 0;
    ${medium('width: 50%; padding-right: 40px;')};
    ${large('width: 40%; padding-right: 40px;')};
  }
  .map {
    width: 100%;
    max-width: 717px;
    ${medium('width: 50%;')};
    ${large('width: 60%;')};
  }
  p, h2 {
    color: white;
    text-align: left;
    margin-bottom: 30px;
  }
`

const Map = () => (
  <MapSection>
    <MapBox>
      <div className="text">
        <h2>BOLLE Festsale</h2> 
        <p>Alt-Moabit 98, 10559 Berlin, Germany</p> 
        <p>It is located in the Spree-Bogen area in the heart of Berlin. It is easily accessible (by public transport or car) from central Berlin or Tegel airport.</p>
        <p>The closest metro stations are only few minutes walk away from the venue:<br/>U-Bahn (U9) - Turmstrasse (300m)<br/>S-Bahn (S3 / S7 / S9) - Bellevue (600m)</p>
        <p>Berlin Central Train Station (Hauptbanhof) is only one stop away via S-Bahn (10min) or six stops with bus 245 (5min).</p>
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
    </MapBox>
  </MapSection>
)

export default Map;
  
