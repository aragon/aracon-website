import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, SafeLink, theme, breakpoint } from '@aragon/ui'
import styled from 'styled-components'
import Forms from '../components/Forms/Forms'

const large = css => breakpoint('large', css);

const OuterContainer = styled.div`
  position: relative;
  max-width: 1540px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${large('justify-content: space-between; max-width: 1440px !important; margin: auto; flex-direction: row;')};
  padding-top: 40px;
  width: 83%;
`;

const Container = styled.div`
  width: 100%;
  margin: 0;
  max-width: 695px;
  padding: 50px 0 50px 0;
  text-align: left;
  ${large('width: 41%; margin: inherit')};
`;

const Volunteer = () => (
  <Page path="/volunteer">
    <Section className="light light-form all-page">
      <OuterContainer>
        <Container>
          <Text><div className="h1box"><h1>Volunteer</h1></div></Text>
          <Text size="xlarge">
            <h3>Volunteering at AraCon is a surefire way of making new connections and learning new skills, as well as experiencing the magic of Aragon’s flagship conference from an insider’s perspective.</h3>
          </Text>
          <Text>
            <p>AraCon is looking for volunteers who are interested in getting some behind the scenes experience putting on one of the most iconic blockchain events of the year. You could be assigned to do a number of various tasks that will ensure our guests and presenters have an exceptional experience.</p><br />
            <p>In exchange for your help, we’ll provide you with a free ticket to attend the event. </p><br/>
            <p>If you’re interested in volunteering at AraCon 2019, please fill out the form and someone from our team will be in touch with you shortly.</p>
          </Text>
          <br/>
        </Container>
        <Forms type="speakers" src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2Bnex51b1b2jCZWBQtfTcaMTwCxvLp_2BTsBh0bYRiVb2M.js"/>
      </OuterContainer>
      
    </Section>
  </Page>
);

export default Volunteer
