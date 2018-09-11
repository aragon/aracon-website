import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, SafeLink, theme } from '@aragon/ui'
import styled from 'styled-components'

const Criteria = styled.ul`
  text-align: left;
  margin: 22px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  color: #707070;
`
const Container = styled.ul`
  width: 100%;
  padding: 50px 8.5%;
`


const Registration = () => (
  <Page path="/registration">
    <Section>
      <Container>
        <Text><div className="h1box"><h1>Registration</h1></div></Text>
        <Text size="xlarge">
          <h3>Registration for AraCon 2019 will be free of charge for Aragon community members.</h3>
        </Text>
        <Text>
          <p>All other members must pay the standard admission fee.</p>
          <p><span className="strong">Not sure whether you’re qualified for a free ticket? These are the criteria:</span></p>
        </Text>
        <Criteria>
          <li>You’re using Aragon to build your own DAO</li>
          <li>You have contributed to the development of the Aragon project and the Aragon Network</li>
          <li>You’re actively participating in discussions on our official community chat (aragon.chat)</li>
          <li>You have contributed in the creation of at least one Aragon Monthly issue</li>
          <li>You attended some of our previous events (hosted or supported)</li>
        </Criteria>
        <Text>
          <p>If you meet one of the criteria above, please email us with the proof at <SafeLink href="mailto:info@aracon.org"> info@aracon.org</SafeLink> and we will send you a registration link.<br/>If you are not a member of the Aragon community yet, we are excited to meet you soon. To get your ticket, please register below!</p>
        </Text>
      </Container>
    </Section> 
  </Page>
)

export default Registration