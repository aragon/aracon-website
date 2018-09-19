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

const Contact = () => (
  <Page path="/contact">
    <Section className="dark">
      <Container>
        <Text><div className="h1box"><h1>Contact</h1></div></Text>
        <Text>
          <p>If you have any questions, ideas or suggestions, please contact us through the form. Someone from our team will be in touch with you shortly</p>
        </Text>
        <br/>
      </Container>
      <Forms type="speakers" src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2BApu8f_2FfoD5Zo9JBww_2F0hZmrCyRG1IqSpVmZcBTG0GC.js"/>
    </Section>
  </Page>
);

export default Contact