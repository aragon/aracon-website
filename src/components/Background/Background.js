import React from 'react'
import background from './assets/background.svg'
import styled from 'styled-components'

const EagleBackground = styled.div`
  text-align: center;
  background: url(${background}) no-repeat 50% -60px;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
`

const Background = () => (
  <EagleBackground/>
)

export default Background
