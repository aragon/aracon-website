import React from 'react'
import Schedule from './Schedule'
import Entry from './Entry'
import { theme, breakpoint } from '@aragon/ui'
import styled from 'styled-components'
const medium = css => breakpoint('medium', css);

const ScheduleBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 0;
  ${medium('padding: 50px 8.5%;')};
  background: white;
  text-align: center;
`;

const DayOne = () => (
  <ScheduleBox>
    <p><i>*All panels and talks will be happening on the main stage (“Kapelle” hall)</i></p>
    <Schedule>
      <Entry time="08:00 HS" title="Registration" subtitle=""/>
      <Entry time="09:00 HS" title="Opening Keynote" subtitle="Luis Cuende & Stefano Bernardi"/>
      <Entry time="" title="Aragon Network" subtitle="Luke Duncan & Bingen Eguzkitza"/>
      <Entry time="" title="Lorikeet" subtitle="Jouni Helminen"/>
      <Entry time="" title="Using aragonPM to build DAppNode (Nest team)" subtitle="Eduardo Antuña Díez"/>
      <Entry time="" title="Frame (Nest team)" subtitle="Jordan Muir"/>
      <Entry time="11:00" title="Coffee Break (15min)" subtitle=""/>
      <Entry time="11:15" title="Keynote" subtitle="Jorge Izquierdo"/>
      <Entry time="" title="New Types of Organizations" subtitle={(<span>Moderator: Griff Green <br/>Panelists: Aron Fischer, Yalda Mousavinia, Jacob Arluck, Jeremy Macaluso</span>)}/>
      <Entry time="" title="That Planning Suite: Aragon apps that will power a decentralized space agency (Nest team)" subtitle="Arthur Lunn Quazia & Yalda Mousavinia"/>
      <Entry time="" title="aragonSDK" subtitle="Arthur Lunn Quazia"/>
      <Entry time="13:00" title="Lunch (1 hour)" subtitle=""/>
      <Entry time="14:00" title="Nest Program Demos" subtitle="Prysmatic Labs, Espresso, Wetonomy, Level K"/>
      <Entry time="" title="Althea and the use of SubnetDAOs" subtitle="Sebastian Bolanos"/>
      <Entry time="" title="Continuous DAOs" subtitle="Thibauld Favre"/>
      <Entry time="" title="Melon Governance Model And Its Tools" subtitle="Jenna Zenk"/>
      <Entry time="15:45" title="Coffee Break (15min)" subtitle=""/>
      <Entry time="16:00" title="Evolving Web3 Infrastructure " subtitle={(<span>Moderator: Evan van Ness <br/>Panelists: Jutta Steiner, Lane Rettig, Martin Köppelmann, Adan Sanchez de Pedro</span>)}/>
      <Entry time="" title="People Might Actually Use This" subtitle="Laura Kalbag"/>
      <Entry time="" title="Aragon Community Governance" subtitle="John Light"/>
      <Entry time="17:30" title="AraCon Afterhours" subtitle=""/>
    </Schedule>
  </ScheduleBox>
);

export default DayOne
