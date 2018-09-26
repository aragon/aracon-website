import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, SafeLink, theme, breakpoint } from '@aragon/ui'
import styled from 'styled-components'
import Forms from '../components/Forms/Forms'

const large = css => breakpoint('large', css);

const TextContainer = styled.div`
  width: 100%;
  max-width: 695px;
  padding: 50px 0 50px 0;
  text-align: left;
  ${large('width: 41%;')};
`;

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


const SpeakersApplication = () => (
  <Page path="/speakersapplication">
    <Section className="dark all-page">
      <OuterContainer>
        <TextContainer>
          <div className="h1box" id="speakers-form"><h1>Speakers application</h1></div>
          <p>If you would like to join a panel or do a talk at AraCon on anything related to governance, blockchain, future of work or borderless collaboration - please apply here before November 10th.</p>
        </TextContainer>
        <Forms type="speakers" src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2Bnex51b1b2jCZWBQtfTcaOhfvbt_2Fq8nWc81qWg3efVA.js"/>
        <div id="speakers"/>
      </OuterContainer>
    </Section>
  </Page>
);

export default SpeakersApplication
