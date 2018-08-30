import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import Background from '../components/Background/Background'
import { Text, SafeLink } from '@aragon/ui'

const Registration = () => (
  <Page path="/registration">
    <Background/>
    <Section>
      <Text><h1>Registration</h1></Text>
      <Text size="xlarge">
        <h2>Registration for AraCon 2019 will be free of charge for Aragon community members.</h2>
      </Text>
      <Text>
        <p>All other members must pay the standard admission fee.</p>
        <p>
          <span className="strong">Not sure whether you’re qualified for a free ticket? These are the criteria:</span><br/>
          <span>You’re using Aragon to build your own DAO</span><br/>
          <span>You have contributed to the development of the Aragon project and the Aragon Network</span><br/>
          <span>You’re actively participating in discussions on our official community chat (aragon.chat)</span><br/>
          <span>You have contributed in the creation of at least one Aragon Monthly issue</span><br/>
          <span>You attended some of our previous events (hosted or supported)</span><br/>
        </p>
      </Text>
      <Text>
        <p>If you meet one of the criteria above, please email us with the proof at <SafeLink href="mailto:info@aracon.org"> info@aracon.org</SafeLink> and we will send you a registration link.<br/>If you are not a member of the Aragon community yet, we are excited to meet you soon. To get your ticket, please register below!</p>
      </Text>
    </Section>
  </Page>
)

export default Registration