import React from 'react'
import Routes from 'react-static-routes'
import styled from 'styled-components'
import { Link } from 'react-static'
import { Button } from '@aragon/ui'
import MenuItem from './MenuItem'

const AraconNav = styled.div`
  width: 100%;
  height: 64px;
  background: #18181A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed; 
  z-index: 5;
`

const Brand = styled.div`
  width: auto;
  height: auto;
`
const Middle = styled.div`
  width: calc(100% - 500px);
  height: auto;
  display: flex;
  justify-content: flex-end;
  ul {
    display: flex;
  }
`
const End = styled.div`
  width: auto;
  height: auto;
`

const menuItems = [
  ['/', 'About'],
  ['/speakers', 'Speakers'],
  ['/agenda', 'Agenda'],
  ['/registration', 'Register'],
  ['/travelinformation', 'Travel Info'],
  ['/volunteer', 'Volunteer'],
  ['/faq', 'FAQ'],
]

const renderMenuItemLink = ({ url, children }) =>
  url.startsWith('/') ? (
    <Link to={url}>{children}</Link>
  ) : (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )

class Navbar extends React.Component {

  render() {
    return (
      <AraconNav>
        <h1>Aracon Logo</h1>
        <Middle>
          <ul>
            {menuItems.map((item, i) => (
              <MenuItem
                key={i}
                url={item[0]}
                label={item[1]}
                active={item[2]}
                renderLink={renderMenuItemLink}
              />
            ))}
          </ul>
        </Middle>
        <End>
          <Button mode="strong">LIVE</Button>
        </End>
      </AraconNav>
    )
  }
}

export default Navbar
