import React from 'react'
import { theme, Text } from '@aragon/ui'

const Question = ({ ...props }) => (
  <div>
    <Text size="xlarge">
      <h2>{props.question}</h2>
    </Text>
    <Text>
      {props.answer}
    </Text>
  </div>
);

export default Question
