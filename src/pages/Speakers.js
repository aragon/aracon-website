import React from 'react'
import { Page } from '../components'
import Forms from '../components/Forms/Forms'
import Section from '../components/Section/Section'
import Background from '../components/Background/Background'

import { Text } from '@aragon/ui'


const Speakers = () => (
  <Page path="/speakers">
    <Background/>
    <Section>
      <Text><h1>Speakers</h1></Text>
      <Text size="xlarge">
        <h2>Want to Speak at AraCon 2019?</h2>
      </Text>
      <Text>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Text>
      <Forms type="speakers"/>
    </Section>
  </Page>
)

export default Speakers
