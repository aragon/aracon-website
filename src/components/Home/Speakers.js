import React from 'react'
import LandingSection from '../Section/LandingSection'
import { Text } from '@aragon/ui'
import styled from 'styled-components'

const SpeakersBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: white;
  text-align: center;
`

const Speakers = () => (
  <LandingSection>
    <SpeakersBox>
    	<div className="h1box"><h1>Speakers</h1></div>
    </SpeakersBox>
  </LandingSection>
)

export default Speakers
