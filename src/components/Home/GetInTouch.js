import React from 'react'
import LandingSection from '../Section/LandingSection'
import { Text } from '@aragon/ui'
import styled from 'styled-components'

const Box = styled.div`
  width: 100%;
  height: calc(75vh - 60px);
  margin: -1px 0 0 0;
  padding: 50px 8.5%;
  background: #18181A;
  text-align: center;
`

const GetInTouch = () => (
  <LandingSection>
    <Box>
      <div className="h1box"><h1>Get in touch</h1></div>
    </Box>
  </LandingSection>
)

export default GetInTouch