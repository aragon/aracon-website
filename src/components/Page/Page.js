import React from 'react'
import { Link, SiteData, RouteData, Head } from 'react-static'
import styled from 'styled-components'
import { AragonApp, AppBar } from '@aragon/ui'
import Navbar from './Navbar'
import Footer from './Footer.js'

const Content = styled.div`
  padding-top: 64px;
  min-height: calc(100vh - 116px)!important;
  
  section.all-page {
    min-height: calc(100vh - 116px)!important;
  }
  .dark {
    background: #18181A;
  }
  .light {
    background: #fafdfd;
  }
  .white {
    background: white;
  }
  .button-strong-div {
    display: flex;
  }
  .button-strong-div.centered {
    justify-content: center;
  }
  a.button-strong {
    text-decoration: none;
    width: auto;
    padding: 10px 15px;
    white-space: nowrap;
    line-height: 1;
    font-size: 14px;
    font-weight: 400;
    color: #707070;
    border: 0;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0,0,0,0);
    color: #FFFFFF;
    background-image: linear-gradient( 130deg,#00B4E6,#00F0E0 );
    display: flex;
    align-items: center;
    .span {
      height: 13px;
    }
  }
  a.button-strong:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.39);
  }
`;

const menuItems = [
  ['/speakers', 'Speakers'],
  ['/agenda', 'Agenda'],
  ['/registration', 'Register'],
  ['/volunteer', 'Volunteer'],
  ['/contact', 'Contact'],
  ['/travelinformation', 'Travel Information'],
  ['/faq', 'FAQ'],
];

class Page extends React.Component {

  render() {
    const { children, path } = this.props;
    const items = menuItems.map(item => [...item, item[0] === path]);

    return (
      <SiteData
        render={({ title: siteTitle, basePath: siteBasePath }) => (
          <RouteData
            render={({ title }) => (
              <AragonApp publicUrl={siteBasePath + '/aragon-ui/'} className="app">
                <Head>
                  <title>{title || siteTitle}</title>
                </Head>
                <Navbar menuItems={items} path={path} />
                <Content>{children}</Content>
                <Footer path={path}/>
              </AragonApp>
            )}
          />
        )}
      />
    )
  }
}

export default Page
