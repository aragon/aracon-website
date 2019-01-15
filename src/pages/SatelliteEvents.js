import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, breakpoint } from '@aragon/ui'
import styled from 'styled-components'
import { Link } from 'react-static'
import Cambrial from './assets/Cambrial.png'
import Witnet from './assets/Witnet.png'
import Dgov from './assets/dgov.svg'
import Parity from './assets/Parity.png'

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

const ParityImg = styled.img`
  height: 80px;
  margin-top: 15px;
`;

const Satellite = () => (
  <Page path="/satellite-events">
    <Section>
      <SatelliteBox>
        <div className="h1box"><h1>Satellite Events</h1></div>
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
            <p>The event will stretch over two full days in a co-creative, open space environment concluding with a dinner gathering for the participants on the first evening. After the opening sessions we will have an open space and facilitators helping us design the working circles. We will continue with the working circles in the morning of the second day. In the afternoon, we will openly share our learnings and insights in a public meetup format with fishbowl-debates.</p>
            <br/><p>You will be among a maximum of forty participants to gather with the intention to create governance models which take a human centric, horizontal approach to the management of shared-resources. We foster a community of participants which have an inherent interest in collaboration to exchange research and learnings to support their own projects while accelerating the innovation on distributed governance models.</p>
            <br/><p>More information and registration details <a href="https://wiki.dgov.foundation/events/dgov-community-council" target="_blank">here</a>.</p>
          </EventBody>
        </Event>
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
            <p><a href="https://cambrial.com/" target="_blank">Cambrial Capital</a> is running an event on participating in and valuing governance of crypto networks as an investor. They will be hosting several speakers actively investing in this space who will share their thoughts and own practices on the topic above. Find more info about the event  <a href="https://www.eventbrite.com/e/cambrial-investing-in-governance-tickets-53733665841" target="_blank">here</a>.</p>
            <br/>
            <p><i>The event has a limited capacity. Please request your invitation using <a href="https://airtable.com/shrhkXHZE2eVjoWwN" target="_blank">this form</a>. The address of the venue will be sent to you if your request is successful. The event will be live-streamed and recorded.</i></p>

          </EventBody>
        </Event>
        <Event>
          <EventHeader>
            <h2>Token Engineering Meetup</h2>
          </EventHeader>
          <EventBody>
            <h2>Organizer:</h2>
            <p>Token Engineering Berlin</p>
            <h2>When:</h2>
            <p>January 28th, 19:00 to 21:00</p>

            <h2>Where:</h2>
            <p>Silicon Allee, Chausseestraße 19, 10115 · Berlin</p>

            <h2>Event Description:</h2>
            <p>Creating tokenized ecosystems for blockchain is one of the most interesting challenges of our time.</p>
            <p>How do we figure out what we want? How do we manifest that intent with block rewards and other crypto building blocks? How do we update the protocols? Given that these systems are wildly powerful, how can we better take responsibility for their design and deployment?</p>
            <p>We'd love to see token ecosystem design become an engineering discipline: Token Engineering (TE). This implies a body of theory and practice and expertise from many different fields. Token Engineering Meetup Berlin aims to drive exchange between these domains.</p>
            <p>Since starting in May 2018 more than 700 members registered to our meetup group from all around the globe. We are offering monthly workshops and lectures and collaborate with e.g. <a href="https://oceanprotocol.com/" target="_blank">Ocean Protocol</a>, <a href="https://www.fullnode.berlin/" target="_blank">Full Node</a>, and AraCon!</p>
            <p>More info about the event and registration <a href="https://www.meetup.com/Token-Engineering/events/mbqqspyzcblc/" target="_blank">here</a>.</p>
          </EventBody>
        </Event>
        <Event>
          <EventHeader>
            <h2>Parity & Friends January Meetup</h2>
          </EventHeader>
          <EventBody>
            <h2>Organizer:</h2>
            <a href="https://www.parity.io/" target="_blank"><ParityImg src={Parity}/></a>
            <h2>When:</h2>
            <p>January 29th. Doors open: 7:00pm</p>

            <h2>Where:</h2>
            <p>Ahoy! Wattstraße 11, Berlin</p>

            <h2>Event Description:</h2>
            <p><a href="https://www.parity.io/" target="_blank">Parity Technologies</a>  is running a meetup on building a smart contract with Parity Substrate through Web Assembly. There will also be presentations from our invited guest speakers from Polkasource and Chainsafe. We will also host an open mic for anyone who wants to present any projects they have been working on with Parity Substrate. We look forward to hearing what you have been up to.</p>
            <p>Doors open at 19:00 and presentations begin at 19:30. We’ll have pizza and drinks, time for questions, discussion, and networking. For more information and RSVP go <a href="https://www.meetup.com/parity/events/257404166/" target="_blank">here</a>.</p>
            <p>Parity will also host a 5-hour workshop on Monday, January 28th from 1 pm to 6 pm, showing how to build your own blockchains with Substrate. This is a developer-only workshop, so programming knowledge is a must! For more information go <a href="https://www.meetup.com/parity/events/257859143/" target="_blank">here</a>.</p>
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
            <p>January 30th 2019 - 19:00 to 22:00</p>

            <h2>Where:</h2>
            <p><a target="_blank" href="https://www.google.de/maps/place/Seminarschiff/@52.5231341,13.3414545,17z/data=!3m1!4b1!4m5!3m4!1s0x47a85123db4ccc73:0xeedf2ad7d04f10c6!8m2!3d52.5231341!4d13.3436432?hl=de&authuser=0">Seminarschiff</a>. Alt-Moabit 91, 10559 Berlin, Germany 10245.</p>

            <h2>Event Description:</h2>
            <p><a href="https://witnet.io/#/" target="_blank">Witnet</a> is a decentralized oracle network that connects smart contracts to the outer world. Join Witnet team on a CO2 neutral "solar ship" for drinks and music to celebrate the anticipated launch of their Decentralized Oracle Network testnet. We have limited space, so be sure to <a href="https://www.eventbrite.com/e/witnet-hosts-aracon-afterparty-and-celebrates-testnet-launch-tickets-54934280913" target="_blank">RSVP here</a>.</p>
          </EventBody>
        </Event>
        <Event>
          <EventHeader>
            <h2>GörliCon</h2>
          </EventHeader>
          <EventBody>
            <h2>When:</h2>
            <p>Jan 31st, 10am - 8pm</p>

            <h2>Where:</h2>
            <p>Factory Berlin Görlitzer Park.</p>

            <h2>Event Description:</h2>
            <p>GörliCon is the ETHBerlin Alumni Conference. The one-day event will have a tech-track and a non-tech-track, workshops and some surprises, covering mainly Ethereum projects and the proposed Görli testnet.</p>
            <p>RSVP on <a href="https://kickback.events/event/0xe2d2c31c68626b6c1301a49ed50854e1cae0c8fa" target="_blank">Kickback</a>.</p>
          </EventBody>
        </Event>
      </SatelliteBox>
    </Section>
  </Page>
);


export default Satellite
