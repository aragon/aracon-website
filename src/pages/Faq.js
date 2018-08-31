import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import Background from '../components/Background/Background'
import { Text } from '@aragon/ui'

const Faq = () => (
  <Page path="/faq">
    <Background/>
    <Section>
      <Text><h1>FAQ</h1></Text>
      
    </Section>
  </Page>
)

export default Faq