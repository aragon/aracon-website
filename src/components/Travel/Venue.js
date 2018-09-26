import React from 'react'
import Section from '../Section/Section'
import MapContainer from './MapContainer'
import styled from 'styled-components'
import { Text, breakpoint, SafeLink } from '@aragon/ui'
import Plane from './assets/plane.svg'
import Bus from './assets/bus.svg'
import backgroundImage from './assets/venue.png'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 85px 8.5% 50px 8.5%;
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

  p {
    color: white;
    text-align: center;
    margin: auto;
    margin-bottom: 20px;
    max-width: 600px;
  }
  h1 {
    text-align: center;
  }
`

const Venue = () => (
  <Section className="white">  
    <Container>
      <Text>
        <div className="h1box centered">
          <h1>BOLLE Festsäle</h1>
        </div>
      </Text>
      <br/>
      <SafeLink href="https://goo.gl/maps/m4ZDRLs9oDR2" target="_blank">
        <p className="strong">Alt-Moabit 98, 10559 Berlin, Germany</p>
      </SafeLink>
      <Text>
        <p>The conference venue is located in the Spree-Bogen area in the heart of Berlin. It is easily accessible (by public transport or car) from central Berlin or Tegel airport.</p>
      </Text>
    </Container>
  </Section>
);

export default Venue;
  
