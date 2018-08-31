import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, Text } from '@aragon/ui'


const Question = ({ ...props }) => {
  const content = (
    <div>
      <Text size="xlarge">
        <h2>{props.question}</h2>
      </Text>
      <Text>
        {props.answer}
      </Text>
    </div>
  )
  return content
}

export default Question
