import React from 'react'
import { PageTitle, Page } from '../components'
import Forms from '../components/Forms/Forms'
import Background from '../components/Background/Background'

import { Text } from '@aragon/ui'

const Speakers = () => (
  <Page path="/speakers">
    <Background/>
    <Text size="xlarge">
      <p>Volunteering at AraCon is a surefire way of making new connections and learning new skills, as well as experiencing the magic of Aragon’s flagship conference from an insider’s perspective.</p>
    </Text>
    <Text>
      <p>AraCon is looking for work exchange volunteers who are interested in getting some behind the scenes experience putting on one of the most iconic blockchain events of the year. You could be assigned to do a number of various tasks that will ensure our guests and presenters have an exceptional experience.</p>
    </Text>
    <Forms type="speakers"/>
  </Page>
)

export default Speakers
