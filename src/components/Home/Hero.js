import React from 'react'
import HeroSection from '../Section/Section'
import { Text, Button, SafeLink, breakpoint } from '@aragon/ui'
import styled from 'styled-components'
import heroImage from './assets/hero-background.png'
import araconLogo from './assets/logo.svg'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const HeroBox = styled.div`
  width: 100%;
  height: 98vh;
  ${medium('min-height: 815px; height: calc(100vh + 64px + 60px);')};
  margin: 0;
  padding: 50px 8.5%;
  background-color: #18181A;
  text-align: center;
  background-image: url(${heroImage});
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin-top: -64px;
  position:relative;
  z-index: 3;
  padding-bottom: calc(50px + 6vw);
  clip-path: polygon(
    0 calc(100% - 6vw),
    100% 100%,
    100% 0,
    0 0
  );

  h2 {
    font-size: 18px;
    ${medium('font-size: 24px;')};
    font-weight: 300;
    line-height: 1.63;
    letter-spacing: 5.6px;
    color: #ffffff;
  }
  h2.sides {
    ${medium('position: absolute; margin: inherit;')};
    position: inherit;
    top: 64vh;
    letter-spacing: 1.6px;
    opacity: 0.4;
    margin-bottom: 0;
  }
  h2.right {
    right: -66px;
    ${medium('transform: rotate(90deg); margin-top: inherit;')};
    transform: rotate(0deg);
  }
  h2.left {
    left: -66px;
    ${medium('transform: rotate(-90deg);')};
    transform: rotate(0deg);
  }
  p {
    display: none;
    ${medium('display: block;')};
  }
`;

const Logo = styled.img`
  margin-top: 175px;
  ${medium('margin-top: 34vh;')};
  max-width: 100%;
`;

const Hero = () => (
  <HeroSection>
    <HeroBox>
      <Logo src={araconLogo} alt="AraCon" />
      <h2>BUILDING ORGANIZATIONS & GOVERNANCE OF THE FUTURE</h2>
      <p>29th-30th of January 2019 in Berlin</p>
      <h2 className="sides right">Berlin, Germany</h2>
      <h2 className="sides left">Jan 29-30.2019</h2><br />
    </HeroBox>
  </HeroSection>
);

export default Hero
