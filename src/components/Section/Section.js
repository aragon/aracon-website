import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '@aragon/ui'

const StyledContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 50px 8.5%;
  text-align: center;
  h1 {
    margin-bottom: 25px;
    font-size: 48px;
    line-height: 1.5;
    color: ${theme.textPrimary};
    font-weight: 600;
  }
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    line-height: 1.5;
    color: ${theme.textSecondary};
    font-weight: 400;
  }
  p {
    margin-bottom: 1em;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.textSecondary};
  }
  .strong {
    font-size: 17px;
    font-weight: 700;
  }
  button a {
    text-decoration: none;
  }
`

const Section = ({ className, ...props }) => {
  const containerProps = { className }
  const content = (
    <StyledContent>
      <div {...props} />
    </StyledContent>
  )
  return <section {...containerProps}>{content}</section>
}

Section.propTypes = {
  className: PropTypes.string,
}

export default Section