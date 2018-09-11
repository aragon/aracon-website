import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import Hero from '../components/Home/Hero.js'
import Speakers from '../components/Home/Speakers.js'
import Venue from '../components/Home/Venue.js'
import Map from '../components/Home/Map.js'

const AccomodationTriangle = styled.div`
  border-right: solid 100vw transparent;
  border-top: 15vh solid #1d1d2a;
  margin-top: -1px;
  background-color: transparent;
  z-index: 5;
  position:relative;
`

const Home = () => (
  <Page path="/">
    <Hero/>
    <Speakers />
    <Venue/>
    <Map/>
    <AccomodationTriangle/>
  </Page>
)

export default Home


