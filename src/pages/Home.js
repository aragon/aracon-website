import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import Hero from '../components/Home/Hero.js'
import Speakers from '../components/Home/Speakers.js'
import Venue from '../components/Home/Venue.js'
import Map from '../components/Home/Map.js'
import Accomodation from '../components/Home/Accomodation.js'
import GetInTouch from '../components/Home/GetInTouch.js'

const MapTriangle = styled.div`
  border-right: solid 100vw white;
  border-top: 15vh solid #18181A;
  margin-top: -1px;
  background-color: white;
  z-index: 1;
`

const AccomodationTriangle = styled.div`
  border-right: solid 100vw #18181A;
  border-top: 15vh solid white;
  margin-top: -1px;
  background-color: #18181A;
  z-index: 1;
`

const Home = () => (
  <Page path="/">
    <Hero/>
    <Speakers />
    <Venue/>
    <Map/>
    <MapTriangle/>
    <Accomodation/>
    <AccomodationTriangle/>
    <GetInTouch/>
  </Page>
)

export default Home


