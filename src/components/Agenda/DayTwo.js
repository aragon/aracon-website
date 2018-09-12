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

const DayTwo = () => (
  <ScheduleBox>
    <p><i>*All panels and talks will be happening on the main stage (“Kapelle” hall)</i></p>
    <Schedule>
      <Entry time="XX:XX" title="Two ipsum dolor sit amet" subtitle="Sunt in culpa qui officia deserunt mollit anim id est laborum"/>
      <Entry time="XX:XX" title="Two ipsum dolor sit amet" subtitle="Sunt in culpa qui officia deserunt mollit anim id est laborum"/>
      <Entry time="XX:XX" title="Two ipsum dolor sit amet" subtitle="Sunt in culpa qui officia deserunt mollit anim id est laborum"/>
      <Entry time="XX:XX" title="Two ipsum dolor sit amet" subtitle="Sunt in culpa qui officia deserunt mollit anim id est laborum"/>
    </Schedule>
  </ScheduleBox>
);

export default DayTwo
