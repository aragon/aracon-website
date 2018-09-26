import React from 'react'
import VenueSection from '../Section/Section'
import { Text, SafeLink } from '@aragon/ui'
import styled from 'styled-components'
import VenueImg from './assets/venue.jpg'

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
    margin-bottom: -1px;
  }
`;

const Venue = () => (
  <VenueSection>
    <VenueBox>
      <div className="h1box xs-centered"><h1>Venue</h1></div>
      <SafeLink href="https://www.bolle-meierei.com/en/bollefestsaele/" target="_blank">
        <img src={VenueImg} alt="" />
      </SafeLink>
    </VenueBox>
  </VenueSection>
);

export default Venue
