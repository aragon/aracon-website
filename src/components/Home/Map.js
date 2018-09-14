import React from 'react'
import Section from '../Section/Section'
import MapContainer from './MapContainer'
import styled from 'styled-components'
import { Link } from 'react-static'
import { Button, breakpoint, SafeLink } from '@aragon/ui'
import Plane from './assets/plane.svg'
import Bus from './assets/bus.svg'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  background: #1d1d2a;
  text-align: center;
  display: flex;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  clip-path: polygon(
    0 0, /* left top */
    100% 0, /* right top */ 
    100% calc(100% - 6vw), /* right bottom */
    0 100% /* left bottom */
  );
`

const TextBox = styled.div`
  width: 100%;
  padding: 50px;
  ${medium('width: 50%; padding: 50px 50px 50px 8.5%;')};
  ${large('width: 40%; padding: 50px 50px 50px 8.5%;')}; 
  p, h2 {
    color: white;
    text-align: left;
    margin-bottom: 20px;
    &.strong {
      font-weight: 700;
    }
  }
`

const MapBox = styled.div`
  width: 100%;
  ${medium('width: 50%;')};
  ${large('width: 60%;')};
`

const Map = () => (
  <Section>
    <Container>
      <TextBox>
        <SafeLink href="https://www.bolle-meierei.com/en/bollefestsaele/" target="_blank">
          <h2>BOLLE Festsale</h2>
        </SafeLink>
        <SafeLink href="https://goo.gl/maps/m4ZDRLs9oDR2" target="_blank">
          <p className="strong">Alt-Moabit 98, 10559 Berlin, Germany</p>
        </SafeLink> 
        <p>AraCon 2019 found its home in one of Berlin&#39;s most impressive event spaces. The 
        landmarked brick building from the industrial era, formerly the Carl Bolle dairy factory, 
        enjoys a central location in the heart of Berlin. The Hauptbahnhof railway station, the 
        Tiergarten park and other city landmarks are within walking distance.</p>
        <br/>
        <Button mode="strong">
          <Link to="/travelinformation">How to get there?</Link>
        </Button>
      </TextBox>
      <MapBox>
        <MapContainer
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_3Zo-VU8tXwUOgPJCQkGqgY7-eWQXzic&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `581px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </MapBox>
    </Container>
  </Section>
);

export default Map;
  
