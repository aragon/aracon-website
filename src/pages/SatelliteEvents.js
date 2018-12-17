import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, breakpoint } from '@aragon/ui'
import styled from 'styled-components'
import { Link } from 'react-static'
import Cambrial from './assets/Cambrial.png'
import Witnet from './assets/Witnet.png'
import Dgov from './assets/dgov.svg'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const SatelliteBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: white;
  text-align: center;
  .h1box {
    max-width: 1200px;
    margin: auto;
  }
`;
const SubtitleBox = styled.div`
  max-width: 1200px;
  margin: auto;
  p {
    text-align: left;
    max-width: 800px;
  }
`;

const Event = styled.div`
  width: 100%;
  max-width: 1195px;
  margin: auto;
  margin-top: 30px;
  border-radius: 6.4px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const EventHeader = styled.div`
  min-height: 91px;
  background-image: linear-gradient(261deg, #6aacf4, #18ebd6);
  display: flex;
  align-items: center;
  padding: 0 30px;
  h2{
    font-size: 26px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    margin-bottom: 0px;
    margin-top: 0px;
  }

`;

const EventBody = styled.div`
  text-align: left;
  padding: 30px;
  h2 {
    font-size: 20px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
    margin-bottom: 0px;
    margin-top: 20px;
  }
  p {
    font-size: 20px;
    font-weight: 300;
  }
`;
const CambrialImg = styled.img`
  height: 50px;
  margin-top: 15px;
`;

const WitnetImg = styled.img`
  height: 35px;
  margin-top: 15px;
`;

const DgovImg = styled.img`
  height: 67px;
  margin-left: -15px;
`;



const Satellite = () => (
  <Page path="/satelite-events">
    <Section>
      <SatelliteBox>
        <div className="h1box"><h1>Satellite Events</h1></div>
        <Event>
          <EventHeader>
            <h2>Cambrial: Investing in Governance</h2>
          </EventHeader>
          <EventBody>
            <h2>Organizer:</h2>
            <a href="https://cambrial.com/" target="_blank"><CambrialImg src={Cambrial}/></a>
            <h2>When:</h2>
            <p>January 28th 2019 - 18:00-21:30</p>

            <h2>Where:</h2>
            <p>Secret location - the address will be revealed to selected applicants</p>

            <h2>Event Description:</h2>
            <p><a href="https://cambrial.com/" target="_blank">Cambrial Capital</a> is running an event on participating in and valuing governance of crypto networks as an investor. They will be hosting several speakers actively investing in this space who will share their thoughts and own practices on the topic above. Find more info about the event  <a href="https://www.eventbrite.com/e/cambrial-investing-in-governance-tickets-53733665841" target="_blank">here</a></p>
            <br/>
            <p><i>The event has a limited capacity. Please request your invitation using <a href="https://airtable.com/shrhkXHZE2eVjoWwN" target="_blank">this form</a>. The address of the venue will be sent to you if your request is successful. The event will be live-streamed and recorded.</i></p>

          </EventBody>
        </Event>
        <Event>
          <EventHeader>
            <h2>Witnet x AraCon Afterparty</h2>
          </EventHeader>
          <EventBody>
            <h2>Organizer:</h2>
            <a href="https://witnet.io/#/" target="_blank"><WitnetImg src={Witnet}/></a>
            <h2>When:</h2>
            <p>January 30th 2019 - 20:00</p>

            <h2>Where:</h2>
            <p>Location TBC</p>

            <h2>Event Description:</h2>
            <p><a href="https://witnet.io/#/" target="_blank">Witnet</a> is a decentralized oracle network that connects smart contracts to the outer world. Join Witnet team for drinks, snacks and music to celebrate the anticipated launch of their Decentralized Oracle Network.</p>
          </EventBody>
        </Event>
        <Event>
          <EventHeader>
            <h2>DGOV Community Council</h2>
          </EventHeader>
          <EventBody>
            <h2>Organizer:</h2>
            <a href="https://dgov.foundation/" target="_blank"><DgovImg src={Dgov}/></a>
            <h2>When:</h2>
            <p>Jan 27-28, 2019</p>

            <h2>Where:</h2>
            <p>FULL NODE: Skalitzer Strasse 85-86, 10997 Berlin, Germany</p>

            <h2>Event Description:</h2>
            <p>Join DGOV Foundation in a 2 day community meetup to sync, coordinate and start solving mutual challenges. More information and registration details <a href="https://wiki.dgov.foundation/dgov-community-council" target="_blank">here</a></p>
          </EventBody>
        </Event>
      </SatelliteBox>
    </Section>
  </Page>
);


export default Satellite
