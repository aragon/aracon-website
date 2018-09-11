import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/LandingSection'
import Schedule from '../components/Agenda/Schedule'
import Entry from '../components/Agenda/Entry'
import { Text, Button, theme, breakpoint } from '@aragon/ui'
import styled from 'styled-components'
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)


const Container = styled.div`
  width: 100%;
  height: calc(75vh - 60px);
  margin: 0;
  padding: 50px 8.5%;
  background: #18181A;
  button {
    width: 50%;
    height: 58px;
    font-size: 17px;
    font-weight: 700;
    color: #000000;
  }
  .first-button {
    border-radius: 3px 0 0 0;
  }
  .second-button {
    border-radius: 0 3px 0 0;
  }
`

const ScheduleBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 0;
  ${medium('padding: 50px 8.5%;')};
  background: white;
  text-align: center;
`

const Agenda = () => (
  <Page path="/agenda">
    <Section>
      <Container>
        <Text><div className="h1box"><h1>Agenda</h1></div></Text>
        <Button className="first-button" mode="normal">Tuesday Jan 29</Button>
        <Button className="second-button" mode="secondary">Wednesday Jan 30</Button>
        <ScheduleBox>
          <p><i>*All panels and talks will be happening on the main stage (“Kapelle” hall)</i></p>
          <Schedule>
            <Entry time="XX:XX" title="Lorem ipsum dolor sit amet" subtitle="Sunt in culpa qui officia deserunt mollit anim id est laborum"/>
            <Entry time="XX:XX" title="Lorem ipsum dolor sit amet" subtitle="Sunt in culpa qui officia deserunt mollit anim id est laborum"/>
            <Entry time="XX:XX" title="Lorem ipsum dolor sit amet" subtitle="Sunt in culpa qui officia deserunt mollit anim id est laborum"/>
            <Entry time="XX:XX" title="Lorem ipsum dolor sit amet" subtitle="Sunt in culpa qui officia deserunt mollit anim id est laborum"/>
          </Schedule>
        </ScheduleBox>
      </Container>
    </Section>
  </Page>
)

export default Agenda
