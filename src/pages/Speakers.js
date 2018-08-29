import React from 'react'
import { PageTitle, Page } from '../components'
import Forms from '../components/Forms/Forms'
import Background from '../components/Background/Background'

import { Text } from '@aragon/ui'

const Speakers = () => (
  <Page path="/speakers">
    <Background/>
    <Text size="xlarge">
      <p>Want to Speak at AraCon 2019?</p>
    </Text>
    <Text>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Text>
    <Forms type="speakers"/>
  </Page>
)

export default Speakers
