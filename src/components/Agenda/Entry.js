import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '@aragon/ui'

const EntryBox = styled.div`
  clear: both;
  text-align: left;
  position: relative;
  .time {
    margin-bottom: .5em;
    float: left;
    width: 33%;
    padding-right: 30px;
    text-align: right;
    position: relative;
  }
  .time:before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border: 6px solid ${theme.accent};
    border-radius: 100%;
    right: -6px;
    top: 4px;
  }
  .description {
    margin: 0 0 3em;
    float: right;
    width: 66%;
    padding-left: 30px;
  }
  .description p {
    line-height: 0.5;
    color: ${theme.textDimmed};
  }
  .description h6 {
    color: ${theme.textTertiary};
    line-height: 2.5;
  }
  .time h3 {
    background: -webkit-linear-gradient(left, ${theme.gradientStartActive}, ${theme.gradientEndActive});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Entry = ({ ...props }) => {
  const content = (
    <EntryBox>
      <div className="time">
        <h3>{props.time} HS</h3>
      </div>
      <div className="description">
        <p>{props.title}</p>
        <h6>{props.subtitle}</h6>
      </div>
    </EntryBox>
  )
  return content
}

export default Entry
