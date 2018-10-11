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
  p {
    color: #dad7d7;
  }
  h3 {
    color: #dad7d7;
  }
  p b {
    font-size: 21px;
    font-weight: 700;
  }
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


const Scholarship = () => (<Page path="/scholarships">
<Section className="dark dark-form all-page">
  <OuterContainer>
    <TextContainer>
      <div className="h1box" id="speakers-form"><h1>Scholarships</h1></div>
        <Text size="xlarge">
          <h3>Excited to come to AraCon, but don't have the financial resources?</h3>
          <p><b>Fill out this form and let us help.</b></p><br />
        </Text>
        <Text>
          <p>Our vision for this conference is to gather Aragon’s global community together. Therefore we want everyone who's super interested in joining the event to be able to attend. The scholarship recipients will get a conference ticket, round trip flights and accommodation for the duration of the conference.</p><br />
          <p>
          Everyone is welcome to apply. We will prioritize scholarships to:<br />
        <b>1.</b> Applicants who have contributed the most to the Aragon community and are in financial hardship<br />
        <b>2.</b> Applicants from emerging countries/regions where the average wage is lower<br />
        <b>3.</b> Applicants who'll be using Aragon's platform in the future.</p><br />
          <p><h1>Scholarship Partners</h1></p>
          <p><img src="https://district0x.io/images/logo@2x.png" alt="district0x" /></p>
          </Text>
          <br/>
          </TextContainer>
        <Forms type="speakers" src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd30OdvFNIdQfI6k_2FSnIMsLHwkqqfzqgEK49Yj3zmHyG4.js"/>
      </OuterContainer>
    </Section>
  </Page>);

export default Scholarship
