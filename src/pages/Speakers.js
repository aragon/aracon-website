import React from 'react'
import { Page } from '../components'
import Forms from '../components/Forms/Forms'
import SpeakersSection from '../components/Home/Speakers'
import { Text } from '@aragon/ui'


const Speakers = () => (
  <Page path="/speakers">
    <SpeakersSection/>
    <Forms type="speakers" src="http://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2Bnex51b1b2jCZWBQtfTcaOhfvbt_2Fq8nWc81qWg3efVA.js"/>
    <div id="speakers"></div>
  </Page>
)

export default Speakers
