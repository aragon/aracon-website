import React from 'react'
import Routes from 'react-static-routes'
import styled from 'styled-components'
import { Link } from 'react-static'
import { Button, Text, breakpoint, BreakPoint, } from '@aragon/ui'
import MenuItem from './MenuItem'
import MenuPanel from './MenuPanel'
import aragonLogo from './assets/aragon-logo.svg'

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
  &.navbar-home {
    background-color: transparent;
  }

  &.navbar-home.navbar-animation { 
    animation-name: navbar-animation;
    animation-duration: 1s;
    background-color: #18181A;
  }

  &.navbar-home.navbar-inverse-animation { 
    animation-name: navbar-inverse-animation;
    animation-duration: 1s;
    background-color: transparent;
  }


  @keyframes navbar-animation {
    from {background-color: transparent;}
    to {background-color: #18181A;}
  }

  @keyframes navbar-inverse-animation {
    from {background-color: #18181A;}
    to {background-color: transparent;}
  }
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

const renderMenuItemLink = ({ url, children }) =>
  url.startsWith('/') ? (
    <Link to={url}><Text size="xlarge">{children}</Text></Link>
  ) : (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Text size="xlarge">{children}</Text>
    </a>
  )

class Navbar extends React.Component {

  componentDidMount() {
    document.onscroll = () => {
      if (document.documentElement.scrollTop > 150) {
        document.getElementById('navbar').classList.remove('navbar-inverse-animation');
        document.getElementById('navbar').classList.add('navbar-animation');
      } else {
        document.getElementById('navbar').classList.add('navbar-inverse-animation');
        document.getElementById('navbar').classList.remove('navbar-animation');  
      }
    }
  }

  render() {
    const { menuItems, path } = this.props
    return (
      <AraconNav className={path == '/' ? 'navbar-home' : ''} id="navbar">
        <img src={aragonLogo}/>
        <End>
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
          <BreakPoint to="medium">
            <MenuPanel items={menuItems} renderLink={renderMenuItemLink} />
          </BreakPoint>
        </End>
      </AraconNav>
    )
  }
}

export default Navbar




