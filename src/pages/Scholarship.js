import React from 'react'
import {Page} from '../components'
import Section from '../components/Section/Section'
import {Text, SafeLink, theme, breakpoint} from '@aragon/ui'
import styled from 'styled-components'
import Forms from '../components/Forms/Forms'

const large = css => breakpoint('large', css);

const OuterContainer = styled.div `
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

const Container = styled.div `
  width: 100%;
  margin: 0;
  max-width: 695px;
  padding: 50px 0 50px 0;
  text-align: left;
  ${large('width: 41%; margin: inherit')};
`;

const Scholarship = () => (<Page path="/scholarships">
  <Section className="light light-form all-page">
    <OuterContainer>
      <Container>
        <Text>
          <div className="h1box">
            <h1>Scholarships</h1>
          </div>
        </Text>
        <Text size="xlarge">
          <h3>Scholarships</h3>
        </Text>
        <Text>
          <p><br/>Need financial help attending AraCon?<br/>
            We will be announcing a scholarship program in October to provide financial assistance for those in need.<br/>
            <SafeLink href="https://eepurl.com/dHogTD" target="_blank">Subscribe to the AraCon email newsletter</SafeLink>
            to stay tuned for details</p>
        </Text>
        <br/>
      </Container>
      <Forms type="speakers" src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2Bnex51b1b2jCZWBQtfTcaMTwCxvLp_2BTsBh0bYRiVb2M.js"/>
    </OuterContainer>
  </Section>
</Page>);

export default Scholarship
