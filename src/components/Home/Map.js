import React from 'react'
import LandingSection from '../Section/LandingSection'
import styled from 'styled-components'

const MapBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: #18181A;
  text-align: center;
  display: flex;
  .text {
    width: 40%;
    padding-right: 40px;
  }
  .map {
    width: 60%;
    background: white;
  }
  p, h2 {
    color: white;
    text-align: left;
    margin-bottom: 30px;
  }
`

const Map = () => (
  <LandingSection>
    <MapBox>
    	<div className="text">
        <h2>BOLLE Festsale</h2> 
        <p>Alt-Moabit 98, 10559 Berlin, Germany</p> 
        <p>It is located in the Spree-Bogen area in the heart of Berlin. It is easily accessible (by public transport or car) from central Berlin or Tegel airport.</p>
        
        <p>The closest metro stations are only few minutes walk away from the venue:<br/>U-Bahn (U9) - Turmstrasse (300m)<br/>S-Bahn (S3 / S7 / S9) - Bellevue (600m)</p>

        <p>Berlin Central Train Station (Hauptbanhof) is only one stop away via S-Bahn (10min) or six stops with bus 245 (5min).</p>

        <p>Tegel Airport is 20min away by TXL direct bus.</p>
      </div>
      <div className="map"></div>
    </MapBox>
  </LandingSection>
)

export default Map
