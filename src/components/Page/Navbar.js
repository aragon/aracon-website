import React from 'react'
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

  &.scrolled{
    background:red;
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
    to {background-color: #18181A;}
    from {background-color: transparent;}
    
  }

  @keyframes navbar-inverse-animation {
    to {background-color: transparent;}
    from {background-color: #18181A;}
    
  }
`;

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
`;

const renderMenuItemLink = ({ url, children }) =>
  url.startsWith('/') ? (
    <Link to={url}><Text size="xlarge">{children}</Text></Link>
  ) : (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Text size="xlarge">{children}</Text>
    </a>
  );

class Navbar extends React.Component {

  scrollingAnimation = () => {
    let navbarElement = document.getElementById('navbar');
    
    if(document.documentElement.scrollTop > 150 || document.body.scrollTop > 150) {
      navbarElement.classList.add('navbar-animation');
      navbarElement.classList.remove('navbar-inverse-animation');
    } else {
      navbarElement.classList.remove('navbar-animation');
      navbarElement.classList.add('navbar-inverse-animation');
    }
  }

  componentDidMount() {
    this.scrollingAnimation();
    let self = this;
    window.addEventListener('scroll', function() {
      self.scrollingAnimation();
    });
  }

  render() {
    const { menuItems, path } = this.props
    return (
      <AraconNav className={path === '/' ? 'navbar-home' : ''} id="navbar">
        <Link to="/"><img src={aragonLogo}/></Link>
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




