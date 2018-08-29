import React from 'react'
import { Link, SiteData, RouteData, Head } from 'react-static'
import Routes from 'react-static-routes'
import styled from 'styled-components'
import { AragonApp, AppBar } from '@aragon/ui'

const Content = styled.div`
  min-height: 200px;
`


class Page extends React.Component {

  render() {
    const { children, path } = this.props
    return (
      <SiteData
        render={({ title: siteTitle }) => (
          <RouteData
            render={({ title }) => (
              <AragonApp publicUrl="/aragon-ui/" className="app">
                <Head>
                  <title>{title || siteTitle}</title>
                </Head>
                <AppBar title="Aracon">
                </AppBar>
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
