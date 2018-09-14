import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, SafeLink, theme, breakpoint } from '@aragon/ui'
import styled from 'styled-components'
import Forms from '../components/Forms/Forms'

const large = css => breakpoint('large', css);

const Container = styled.div`
  width: 100%;
  margin: auto;
  max-width: 695px;
  padding: 50px 0 50px 8.5%;
  text-align: left;
  ${large('position: absolute; width: 41%; margin: inherit')};
`;

const Volunteer = () => (
  <Page path="/volunteer">
    <Section className="light">
      <Container>
        <Text><div className="h1box"><h1>Volunteer</h1></div></Text>
        <Text size="xlarge">
          <h3>Volunteering at AraCon is a surefire way of making new connections and learning new skills, as well as experiencing the magic of Aragon’s flagship conference from an insider’s perspective.</h3>
        </Text>
        <Text>
          <p>In exchange for your help, we’ll provide you with a free ticket to attend the event.</p>
        </Text>
        <br/>
      </Container>
      <Forms type="speakers" src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2Bnex51b1b2jCZWBQtfTcaMTwCxvLp_2BTsBh0bYRiVb2M.js"/>
    </Section>
  </Page>
);

export default Volunteer