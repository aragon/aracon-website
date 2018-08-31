import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import Schedule from '../components/Agenda/Schedule'
import Entry from '../components/Agenda/Entry'
import Background from '../components/Background/Background'
import { Text, Button, theme } from '@aragon/ui'
import styled from 'styled-components'


const ScheduleBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: white;
  text-align: center;
`

const Agenda = () => (
  <Page path="/agenda">
    <Background/>
    <Section>
      <Text><h1>Agenda</h1></Text>
    </Section>
    <Section>
      <Button mode="normal">Tuesday Jan 29</Button>
    	<Button mode="secondary">Wednesday Jan 30</Button>
    	<ScheduleBox>
    		<p><i>*All panels and talks will be happening on the main stage (“Kapelle” hall)</i></p>
    		<Schedule>
    			<Entry time="XX:XX" title="Lorem ipsum dolor sit amet" subtitle="Sunt in culpa qui officia deserunt mollit anim id est laborum"/>
          <Entry time="XX:XX" title="Lorem ipsum dolor sit amet" subtitle="Sunt in culpa qui officia deserunt mollit anim id est laborum"/>
          <Entry time="XX:XX" title="Lorem ipsum dolor sit amet" subtitle="Sunt in culpa qui officia deserunt mollit anim id est laborum"/>
          <Entry time="XX:XX" title="Lorem ipsum dolor sit amet" subtitle="Sunt in culpa qui officia deserunt mollit anim id est laborum"/>
        </Schedule>
    	</ScheduleBox>
    </Section>
  </Page>
)

export default Agenda
