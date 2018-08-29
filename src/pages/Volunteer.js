import React from 'react'
import { Page } from '../components'
import Forms from '../components/Forms/Forms'
import { Text } from '@aragon/ui'

const Volunteer = () => (
  <Page path="/volunteer">
    <Text size="xlarge">
      <p className="delfi">Volunteering at AraCon is a surefire way of making new connections and learning new skills, as well as experiencing the magic of Aragon’s flagship conference from an insider’s perspective.</p>
    </Text>
    <Text>
      <p>AraCon is looking for work exchange volunteers who are interested in getting some behind the scenes experience putting on one of the most iconic blockchain events of the year. You could be assigned to do a number of various tasks that will ensure our guests and presenters have an exceptional experience.</p>
    </Text>
    <Text>
      <p>In exchange for your help, we’ll provide you with a free ticket to attend the event.</p>
    </Text>
    <Forms type="volunteer"/>
  </Page>
)

export default Volunteer