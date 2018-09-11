import React from 'react'
import VenueSection from '../Section/Section'
import { Text } from '@aragon/ui'
import styled from 'styled-components'
import VenueImg from './assets/venue.png'

const VenueBox = styled.div`
  width: 100%;
  margin: 0 0 -6px 0;;
  background: white;
  text-align: center;
  .h1box {
    margin: 0 8.5%;
    padding: 50px 0 0 0;
  }
  img {
    width: 100%;
  }
`

const Venue = () => (
  <VenueSection>
    <VenueBox>
      <div className="h1box"><h1>Venue</h1></div>
      <img src={VenueImg} alt="" />
    </VenueBox>
  </VenueSection>
)

export default Venue
