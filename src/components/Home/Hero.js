import React from 'react'
import LandingSection from '../Section/LandingSection'
import { Text } from '@aragon/ui'
import styled from 'styled-components'

const HeroBox = styled.div`
  width: 100%;
  height: calc(75vh - 60px);
  margin: 0;
  padding: 50px 8.5%;
  background: #18181A;
  text-align: center;
`

const Hero = () => (
  <LandingSection>
    <HeroBox>
    </HeroBox>
  </LandingSection>
)

export default Hero
