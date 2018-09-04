import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '@aragon/ui'

const MenuItem = ({ url, label, active, renderLink }) => (
  <StyledMenuItem active={active}>
    <span>{renderLink({ url, children: label })}</span>
  </StyledMenuItem>
)

const StyledMenuItem = styled.li`
  display: flex;
  align-items: stretch;
  white-space: nowrap;
  > span {
    display: flex;
    align-items: center;
    padding: 0 15px;
    font-size: 15px;
    color: ${({ active }) => (active ? theme.positiveText : theme.textSecondary)};
  }
  a {
    text-decoration: none;
    padding: 0 10px;
    span {
      color: ${({ active }) => (active ? theme.positiveText : theme.textSecondary)};
    }
    span:hover {
      color: ${theme.positiveText};
    }
  }
`

MenuItem.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
  active: PropTypes.bool,
  renderLink: PropTypes.func,
}

MenuItem.defaultProps = {
  active: false,
  renderLink: ({ url, children }) => <a href={url}>{children}</a>,
}

export default MenuItem
