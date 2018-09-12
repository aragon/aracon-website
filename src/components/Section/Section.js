import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '@aragon/ui'

const StyledContent = styled.div`
  width: 100vw;
  margin: -1px auto -1px auto;
  position: relative;
  text-align: left;

  .h1box {
    display: flex;
  }
  h1 {
    margin-bottom: 25px;
    font-size: 48px;
    line-height: 1.5;
    background: -webkit-linear-gradient(left, #7af7d0, #64b0f1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    text-align: left;
  }
  h2 {
    margin-bottom: 25px;
    font-size: 38px;
    line-height: 1.5;
    color: black;
    font-weight: bold;
  }
  h3 {
    margin-bottom: 25px;
    font-size: 25px;
    line-height: 1.5;
    color: black;
    font-weight: bold;
  }
  p {
    font-size: 17px;
    font-size: 19px;
    line-height: 27px;
    color: ${theme.textSecondary};
    a {
      color: #61B2F0;
      text-decoration: none;
    }
  }
  button a {
    text-decoration: none;
  }
  .strong {
    font-size: 17px;
    font-weight: 700;
  }
`;

const Section = ({ className, ...props }) => {
  const containerProps = { className };

  return (
    <section {...containerProps}>
      <StyledContent>
        <div {...props} />
      </StyledContent>
    </section>
  )
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section