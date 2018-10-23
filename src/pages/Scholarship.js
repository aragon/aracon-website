import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, SafeLink, theme, breakpoint } from '@aragon/ui'
import styled from 'styled-components'
import Forms from '../components/Forms/Forms'
import scholarship1 from './assets/scholarship1.svg'
import scholarship2 from './assets/scholarship2.svg'
import scholarship3 from './assets/scholarship3.svg'
import agenda from './assets/agenda.svg'

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
  p.blue {
    color: #a1a5ca;
  }
  blockquote {
    position: relative;
    position: relative;
    border-left: solid 5px #18ebd6;
    margin-left: 0;
    padding-left: 40px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  margin: 30px -15px;
  p {
    padding-top: 10px;
  }
  div {
    padding: 15px;
    width: 100%;
  }
  &.agenda-container {
    margin-top: 10px;
    .agenda-box {
      display: flex;
      p {
        padding-top: 0;
      }
      img {
        margin-right: 15px
      }
    }
  }
`;


const Scholarship = () => (<Page path="/scholarships">
<Section className="dark dark-form all-page">
  <OuterContainer>
    <TextContainer>
      <div className="h1box" id="speakers-form"><h1>Scholarships</h1></div>
        <blockquote><h3>Excited to come to AraCon, but don&#39;t have the financial resources?</h3></blockquote>
        <Text>
          <p className="blue">Our vision for this conference is to gather Aragon’s global community together. Therefore we want everyone who&#39;s super interested in joining the event to be able to attend. The scholarship recipients will get a conference ticket, round trip flights and accommodation for the duration of the conference.</p><br />
          <p className="blue">Everyone is welcome to apply. We will prioritize scholarships to:</p>
        </Text>
        <FlexContainer>
          <div>
            <img src={scholarship1} />
            <p>Applicants who have contributed the most to the Aragon community and are in financial hardship.</p>
          </div>
          <div>
            <img src={scholarship2} />
            <p>Applicants from emerging countries / regions where the average wage is lower.</p>
          </div>
          <div>
            <img src={scholarship3} />
            <p>Applicants who'll be using Aragon's platform in the future.</p>
          </div>
        </FlexContainer>
        <Text>
          <p className="blue">Deadline to apply:</p>
        </Text>
        <FlexContainer className="agenda-container">
          <div className="agenda-box">
            <img src={agenda} />
            <p>November 23rd 2018. We will be reviewing the applications right after and will contact you accordingly.</p>
          </div>
        </FlexContainer>
      </TextContainer>
      <Forms type="speakers" src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd30OdvFNIdQfI6k_2FSnIMsLHwkqqfzqgEK49Yj3zmHyG4.js"/>
    </OuterContainer>
  </Section>
</Page>);

export default Scholarship
