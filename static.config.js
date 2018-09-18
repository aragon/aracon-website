import path from 'path'
import React from 'react'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { ServerStyleSheet } from 'styled-components'

const REACT_STATIC_PATHS = {
  src: 'src',
  dist: 'dist',
  devDist: 'dist',
  public: 'public',
}

const ARAGON_UI_ASSETS = path.dirname(require.resolve('@aragon/ui'))

export default {
  siteRoot: process.env.SITE_ROOT || '',
  basePath: process.env.BASE_PATH || '',
  getSiteData: () => ({
    title: 'Aracon website',
  }),
  getRoutes: () => [
    {
      path: '/',
      component: 'src/pages/Home',
      getData: () => ({ title: 'Aracon' }),
    },
    {
      path: '/speakers',
      component: 'src/pages/Speakers',
      getData: () => ({ title: 'Aracon - Speakers' }),
    },
    {
      path: '/agenda',
      component: 'src/pages/Agenda',
      getData: () => ({ title: 'Aracon - Agenda' }),
    },
    {
      path: '/registration',
      component: 'src/pages/Registration',
      getData: () => ({ title: 'Aracon - Registration' }),
    },
    {
      path: '/volunteer',
      component: 'src/pages/Volunteer',
      getData: () => ({ title: 'Aracon - Volunteer' }),
    },
    {
      path: '/faq',
      component: 'src/pages/Faq',
      getData: () => ({ title: 'Aracon - FAQ' }),
    },
    {
      path: '/travelinformation',
      component: 'src/pages/Travel',
      getData: () => ({ title: 'Aracon - Travel Information' }),
    },
    {
      is404: true,
      component: 'src/pages/NotFound',
      getData: () => ({ title: 'Page Not Found' }),
    },
  ],
  paths: REACT_STATIC_PATHS,
  webpack: (conf, { defaultLoaders }) => {
    conf.resolve = Object.assign({}, conf.resolve || {}, {
      modules: ((conf.resolve && conf.resolve.modules) || []).concat([
        path.join(__dirname, 'node_modules'),
        path.join(__dirname, REACT_STATIC_PATHS.dist),
      ]),
    })

    conf.plugins = (conf.plugins || []).concat([
      new CopyWebpackPlugin([
        {
          from: ARAGON_UI_ASSETS,
          to: path.resolve(
            path.join(__dirname, REACT_STATIC_PATHS.dist, 'aragon-ui')
          ),
        },
      ]),
    ])

    const fileLoader = defaultLoaders.fileLoader
    fileLoader.query.name = 'static/[hash:8]-[name].[ext]'
    conf.module.rules = [
      {
        oneOf: [defaultLoaders.jsLoader, defaultLoaders.cssLoader, fileLoader],
      },
    ]

    conf.plugins.push(new ExtractTextPlugin('app.css'))

    return conf
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends React.Component {
    analyticsCode() {
      if (process.env.NODE_ENV !== 'production') return ''
      return `
        var _paq = _paq || []
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['trackPageView'])
        _paq.push(['enableLinkTracking'])
        ;(function() {
          var u = 'https://arastats.eu/staats/'
          _paq.push(['setTrackerUrl', u + 'piwik.php'])
          _paq.push(['setSiteId', '8'])
          var d = document,
            g = d.createElement('script'),
            s = d.getElementsByTagName('script')[0]
          g.type = 'text/javascript'
          g.async = true
          g.defer = true
          g.src = u + 'piwik.js'
          s.parentNode.insertBefore(g, s)
        })()
      `
    }
    render() {
      const {
        Html,
        Head,
        Body,
        siteData: { title: siteTitle },
        children,
        renderMeta,
        routeInfo: { allProps: { title } = {} } = {},
      } = this.props
      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <title>{title || siteTitle}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon-32.png" sizes="32x32" />
            <link rel="icon" href="/favicon-57.png" sizes="57x57" />
            <link rel="icon" href="/favicon-72.png" sizes="72x72" />
            <link rel="icon" href="/favicon-96.png" sizes="96x96" />
            <link rel="icon" href="/favicon-120.png" sizes="120x120" />
            <link rel="icon" href="/favicon-128.png" sizes="128x128" />
            <link rel="icon" href="/favicon-144.png" sizes="144x144" />
            <link rel="icon" href="/favicon-152.png" sizes="152x152" />
            <link rel="icon" href="/favicon-195.png" sizes="195x195" />
            <link rel="icon" href="/favicon-228.png" sizes="228x228" />
            {renderMeta.styleTags}
          </Head>
          <Body>
            {children}
          </Body>
        </Html>
      )
    }
  },
}
