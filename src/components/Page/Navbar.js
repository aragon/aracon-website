import React from 'react'
import Routes from 'react-static-routes'
import styled from 'styled-components'
import { Link } from 'react-static'
import { Button, Text, breakpoint, BreakPoint, } from '@aragon/ui'
import MenuItem from './MenuItem'
import MenuPanel from './MenuPanel'

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
const End = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: flex-end;
  ul {
    display: flex;
  }
  button {
    margin-left: 10px;
  }
`

const menuItems = [
  ['/', 'About'],
  ['/speakers', 'Speakers'],
  ['/agenda', 'Agenda'],
  ['/registration', 'Register'],
  ['/volunteer', 'Volunteer'],
  ['/faq', 'FAQ'],
]

const renderMenuItemLink = ({ url, children }) =>
  url.startsWith('/') ? (
    <Link to={url}><Text size="xlarge">{children}</Text></Link>
  ) : (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Text size="xlarge">{children}</Text>
    </a>
  )

class Navbar extends React.Component {

  render() {
    return (
      <AraconNav>
        <h1>Aracon Logo</h1>
        <End>
          <BreakPoint to="medium">
            <MenuPanel items={menuItems} renderLink={renderMenuItemLink} />
          </BreakPoint>
          <BreakPoint from="medium">
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
          </BreakPoint>
          
          <Button mode="strong">LIVE</Button>
        </End>
      </AraconNav>
    )
  }
}

export default Navbar
