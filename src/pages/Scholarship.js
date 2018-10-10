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
          <h3>Need financial help attending AraCon?</h3>
        </Text>
        <Text>
          <p>We will be announcing a scholarship program in October to provide financial assistance for those in need.<br/>
          <SafeLink href="https://eepurl.com/dHogTD" target="_blank">Subscribe to the AraCon email newsletter</SafeLink> to stay tuned for details</p><br />
          <p><h1>Scholarship Partners</h1></p>
          <p><img src="https://district0x.io/images/logo@2x.png" alt="district0x" /></p>
          </Text>
          <br/>
          </TextContainer>
        <Forms type="speakers" src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2Bnex51b1b2jCZWBQtfTcaOhfvbt_2Fq8nWc81qWg3efVA.js"/>
      </OuterContainer>
    </Section>
  </Page>);

export default Scholarship
