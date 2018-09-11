import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, SafeLink, theme } from '@aragon/ui'
import styled from 'styled-components'
import Forms from '../components/Forms/Forms'

const Container = styled.ul`
  width: 100%;
  padding: 50px 8.5%;
`

const Volunteer = () => (
  <Page path="/volunteer">
    <Section>
      <Container>
        <Text><div className="h1box"><h1>Volunteer</h1></div></Text>
        <Text size="xlarge">
          <h3>Volunteering at AraCon is a surefire way of making new connections and learning new skills, as well as experiencing the magic of Aragon’s flagship conference from an insider’s perspective.</h3>
        </Text>
        <Text>
          <p>In exchange for your help, we’ll provide you with a free ticket to attend the event.</p>
        </Text>
        <br/>
        <Forms type="speakers" src="http://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2Bnex51b1b2jCZWBQtfTcaMTwCxvLp_2BTsBh0bYRiVb2M.js"/>
      </Container>
    </Section>
  </Page>
)

export default Volunteer