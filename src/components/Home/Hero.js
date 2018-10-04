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
  .button-strong {
    margin-top: 150px;
  }
  .button-strong-div {
    display: flex;
  }
  .button-strong-div.centered {
    justify-content: center;
  }
  a.button-strong {
    text-decoration: none;
    width: auto;
    padding: 10px 15px;
    white-space: nowrap;
    line-height: 1;
    font-size: 15px;
    border: 0;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0,0,0,0);
    color: #FFFFFF;
    background-image: linear-gradient( 130deg,#00B4E6,#00F0E0 );
    display: flex;
    align-items: center;
    span {
      font-weight: 800;
    }
  }
  a {
    ${medium('margin-top: 25px; margin-bottom: 0;')};
    margin-bottom: 25px;
    margin-top: 0;
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
  margin-top: 128px;
  ${medium('margin-top: 34vh;')};
  max-width: 100%;
`;

const Hero = () => (
  <HeroSection>
    <HeroBox>
      <Logo src={araconLogo} alt="AraCon" />
      <h2>BUILDING ORGANIZATIONS & GOVERNANCE OF THE FUTURE</h2>
      <p>29th-30th of January 2019 in Berlin</p>
      <Button.Anchor mode="strong" href="https://ti.to/aragon/aracon-one/" target="_blank">
        Purchase your ticket
      </Button.Anchor>
      <h2 className="sides right">Berlin, Germany</h2>
      <h2 className="sides left">Jan 29-30.2019</h2><br />
      <HeroTriangle/>
    </HeroBox>
  </HeroSection>
);

export default Hero
