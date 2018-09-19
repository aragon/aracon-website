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
        render={({ title: siteTitle }) => (
          <RouteData
            render={({ title }) => (
              <AragonApp publicUrl="/aragon-ui/" className="app">
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
