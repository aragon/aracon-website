import React from 'react'
import LandingSection from '../Section/LandingSection'
import { Text } from '@aragon/ui'
import styled from 'styled-components'

import heroImage from './assets/hero-background.png'

const HeroBox = styled.div`
  width: 100%;
  height: calc(75vh - 60px);
  margin: 0;
  padding: 50px 8.5%;
  background-color: #18181A;
  text-align: center;
  background-image: url(${heroImage});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

const HeroTriangle = styled.div`
  border-left: solid 100vw transparent;
  border-bottom: 15vh solid white;
  margin-bottom: -1px;
  background-color: transparent;
  z-index: 1;
      position: absolute;
    width: 100vw;
    left: 0;
    bottom: 0;
`

const Hero = () => (
  <LandingSection>
    <HeroBox>
      <HeroTriangle/>
    </HeroBox>
  </LandingSection>
)

export default Hero
