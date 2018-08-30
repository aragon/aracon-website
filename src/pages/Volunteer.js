import React from 'react'
import { Page } from '../components'
import Forms from '../components/Forms/Forms'
import Section from '../components/Section/Section'
import Background from '../components/Background/Background'
import { Text } from '@aragon/ui'

const Volunteer = () => (
  <Page path="/volunteer">
    <Background/>
    <Section>
      <Text><h1>Volunteers</h1></Text>
      <Text size="xlarge">
        <p className="strong">Volunteering at AraCon is a surefire way of making new connections and learning new skills, as well as experiencing the magic of Aragon’s flagship conference from an insider’s perspective.</p>
      </Text>
      <Text>
        <p>In exchange for your help, we’ll provide you with a free ticket to attend the event.</p>
      </Text>
      <Forms type="volunteer"/>
    </Section>
  </Page>
)

export default Volunteer