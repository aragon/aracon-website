import React from 'react'
import Section from '../Section/Section'
import {breakpoint} from '@aragon/ui'
import styled from 'styled-components'
import Countdown from './Countdown'

const medium = css => breakpoint('medium', css);


const Container = styled.div `
  position: relative;
  z-index: 2;
  width: 100%;
  margin: 0;
  margin-top: -6vw;
  padding: 8vw 10px 4vw 10px;
  ${medium('padding: 8vw 8.5% 4vw 8.5%;')}
  background: linear-gradient(135deg,rgba(0,180,230,.8),rgba(0,240,224,.7));
  color: white;
  text-align: center;
  h2 {
    max-width: 345px;
    ${medium('max-width: none;')}
    margin: auto;
    color: white;
    text-transform: uppercase;
    font-size: 26px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.53;
    letter-spacing: 4.35px;
    margin-bottom: 30px;
  }
  p.subtitle {
    max-width: 280px;
    ${medium('max-width: none;')}
    margin: auto;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.42;
    letter-spacing: normal;
    color: #ffffff;
    margin-top: 0;
  }
  b {
    font-weight: 900;
  }
  a {
    font-weight: bold;
    color: white!important;
    text-decoration: underline!important;
  }
`;


const CountdownComponent = () => (
  <Section>
    <Container>
      <h2>AraCon is now sold out</h2>
      <p className="subtitle">If you have any questions about your registration please contact us <a href="mailto:info@aracon.one">here</a>.</p>
    </Container>
  </Section>
);

export default CountdownComponent
