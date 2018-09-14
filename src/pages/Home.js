import React from 'react'
import styled from 'styled-components'
import { Page } from '../components'
import Hero from '../components/Home/Hero.js'
import Speakers from '../components/Home/Speakers.js'
import Venue from '../components/Home/Venue.js'
import Map from '../components/Home/Map.js'

const Home = () => (
  <Page path="/">
    <Hero/>
    <Speakers />
    <Venue/>
    <Map/>
  </Page>
);

export default Home


