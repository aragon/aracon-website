import React from 'react'
import HeroSection from '../Section/Section'
import { Text, breakpoint } from '@aragon/ui'
import styled from 'styled-components'
import heroImage from './assets/hero-background.png'
import araconLogo from './assets/logo.png'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const HeroBox = styled.div`
  width: 100%;
  height: 98vh;
  ${medium('min-height: 815px; height: calc(100vh + 64px + 60px);')};
  ${large('min-height: 815px; height: calc(100vh + 64px + 60px);')};
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
  h2 {
    font-size: 18px;
    ${medium('font-size: 24px;')};
    ${large('font-size: 24px;')};
    font-weight: 300;
    line-height: 1.63;
    letter-spacing: 5.6px;
    color: #ffffff;
  }
  h2.sides {
    ${medium('position: absolute; margin: inherit;')};
    ${large('position: absolute; margin: inherit;')};
    position: inherit;
    top: 396px;
    letter-spacing: 1.6px;
    opacity: 0.4;
    margin-bottom: 0;
  }
  h2.right {
    right: -4%;
    ${medium('transform: rotate(90deg); margin-top: inherit;')};
    ${large('transform: rotate(90deg); margin-top: inherit;')};
    transform: rotate(0deg);
    margin-top: 31%;
  }
  h2.left {
    left: -4%;
    ${medium('transform: rotate(-90deg);')};
    ${large('transform: rotate(-90deg);')};
    transform: rotate(0deg);
  }
`;

const HeroTriangle = styled.div`
  border-right: solid 100vw transparent;
  border-bottom: 15vh solid white;
  margin-bottom: -1px;
  background-color: transparent;
  z-index: 1;
  position: absolute;
  width: 100vw;
  left: 0;
  bottom: 0;
`;

const Logo = styled.img`
  margin-top: 92px;
  ${medium('margin-top: 254px;')};
  ${large('margin-top: 254px;')};
  max-width: 100%;
`;

const Hero = () => (
  <HeroSection>
    <HeroBox>
      <Logo src={araconLogo} alt="Aracon" />
      <h2>BUILDING ORGANISATIONS & GOVERNANCE OF THE FUTURE</h2>
      <h2 className="sides right">Berlin, Germany</h2>
      <h2 className="sides left">Jan 29-30.2019</h2>
      <HeroTriangle/>
    </HeroBox>
  </HeroSection>
);

export default Hero
