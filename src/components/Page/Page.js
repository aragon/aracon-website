import React from 'react'
import { Link, SiteData, RouteData, Head } from 'react-static'
import Routes from 'react-static-routes'
import styled from 'styled-components'
import { AragonApp, AppBar } from '@aragon/ui'
import Navbar from './Navbar'

const Content = styled.div`
  min-height: 200px;
  padding-top: 64px
`

const menuItems = [
  ['/', 'About'],
  ['/speakers', 'Speakers'],
  ['/agenda', 'Agenda'],
  ['/registration', 'Register'],
  ['/volunteer', 'Volunteer'],
  ['/faq', 'FAQ'],
]

class Page extends React.Component {

  render() {
    const { children, path } = this.props
    const items = menuItems.map(item => [...item, item[0] === path])
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
              </AragonApp>
            )}
          />
        )}
      />
    )
  }
}

export default Page
