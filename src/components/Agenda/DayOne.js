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
      <Entry time="09:00 HS" title="Opening Keynote" subtitle="Luis Cuende & Stefano Bernardi"/>
      <Entry time="09:40 HS" title="Aragon Network" subtitle="Luke Duncan & Bingen Eguzkitza"/>
      <Entry time="" title="Lorikeet" subtitle="Jouni Helminen"/>
      <Entry time="" title="Using aragonPM to build DAppNode (Nest team)" subtitle="Eduardo Antuña Díez"/>
      <Entry time="" title="Frame (Nest team)" subtitle="Jordan Muir"/>
      <Entry time="" title="Coffee Break (15min)" subtitle=""/>
      <Entry time="" title="Keynote" subtitle="Jorge Izquierdo"/>
      <Entry time="" title="New Types of Organizations" subtitle={(<span>Moderator: Griff Green <br/>Panelists: Aron Fischer, Yalda Mousavinia, Jacob Arluck, Jeremy Macaluso</span>)}/>
      <Entry time="" title="TPS (Nest team)" subtitle="Arthur Lunn Quazia & Yalda Mousavinia"/>
      <Entry time="" title="aragonSDK" subtitle="Arthur Lunn Quazia"/>
      <Entry time="" title="Lunch (1 hour)" subtitle=""/>
      <Entry time="" title="Nest Program Demos" subtitle="Prysmatic Labs, Espresso, Wetonomy, Level K"/>
      <Entry time="" title="Althea and the use of SubnetDAOs" subtitle="Sebastian Bolanos"/>
      <Entry time="" title="Continuous DAOs" subtitle="Thibauld Favre"/>
      <Entry time="" title="Melonport is winding down next week, and it's not because of crypto prices" subtitle="Jenna Zenk"/>
      <Entry time="" title="Coffee Break (15min)" subtitle=""/>
      <Entry time="" title="Evolving Web3 Infrastructure " subtitle={(<span>Moderator: Evan van Ness <br/>Panelists: Jutta Steiner, Lane Rettig, Martin Köppelmann, Adan Sanchez de Pedro</span>)}/>
      <Entry time="" title="Ethical Design" subtitle="Laura Kalbag"/>
      <Entry time="" title="Aragon Community Governance" subtitle="John Light"/>
      <Entry time="" title="AraCon Afterhours" subtitle=""/>
    </Schedule>
  </ScheduleBox>
);

export default DayOne
