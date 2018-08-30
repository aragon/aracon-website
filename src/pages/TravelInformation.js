import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import Background from '../components/Background/Background'

import { Text, Button, SafeLink } from '@aragon/ui'


const TravelInformation = () => (
  <Page path="/travelinformation">
    <Background/>
    <Section>
      <Text><h1>Travel Information</h1></Text>
      <Text size="xlarge">
        <h2>Accomodation deals</h2>
      </Text>
      <Text>
        <p>AMERON Berlin AMION Hotel is the official conference hotel, located just 100m away from the venue. It has a unique, direct view of the River Spree and superb location at the heart of the capital city between the West Centre (Ku&#39;Damm) and the East Centre (Alexanderplatz). To join our speakers, investors and other guests, book your stay by clicking the button below.</p>
      </Text>
      <Button mode="strong"><SafeLink href="https://www.google.es/" target="_blank">Book your stay</SafeLink></Button>
      <Text>
        <p><br/>Prices are ‎€109 for a single room and ‎€119 for a double room per night, breakfast included. All rooms are subject to availability. Special price is valid for all bookings between xx-xx.</p>
      </Text>
    </Section>
    <Section>
      <Text size="xlarge">
        <h2>Getting There</h2>
      </Text>
      <Text>
        <p>The conference venue - BOLLE Festsale (Alt-Moabit 98, 10559 Berlin) is located in the Spree-Bogen area in the heart of Berlin. It is easily accessible (by public transport or car) from central Berlin or Tegel airport.</p>
      </Text>
      <Text>
        <p>The closest <span className="strong">metro stations</span> are only few minutes walk away from the venue:<br/>U-Bahn (U9) - Turmstrasse (300m)<br/>S-Bahn (S3 / S7 / S9) - Bellevue (600m)</p>
      </Text>
      <Text>
        <p><span className="strong">Berlin Central Train Station</span> (Hauptbanhof) is only one stop away via S-Bahn (10min) or six stops with bus 245 (5min). </p>
      </Text>
      <Text>
        <p><span className="strong">Tegel Airport</span> is 20min away by TXL direct bus.</p>
      </Text>
    </Section>
  </Page>
)

export default TravelInformation
