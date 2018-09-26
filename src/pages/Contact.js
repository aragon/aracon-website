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
  max-width: 695px;
  padding: 50px 0 50px 0;
  text-align: left;
  ${large('width: 41%;')};
`;

const Contact = () => (
  <Page path="/contact">
    <Section className="dark all-page">
      <OuterContainer>
        <Container>
          <Text><div className="h1box"><h1>Contact</h1></div></Text>
          <Text>
            <p>If you have any questions, ideas or suggestions, please contact us through the form. Someone from our team will be in touch with you shortly</p>
          </Text>
          <br/>
        </Container>
        <Forms type="speakers" src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2BApu8f_2FfoD5Zo9JBww_2F0hZmrCyRG1IqSpVmZcBTG0GC.js"/>
      </OuterContainer>
    </Section>
  </Page>
);

export default Contact