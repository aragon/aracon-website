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
  getSiteData: () => ({
    title: 'AraCon website',
  }),
  getRoutes: () => [
    {
      path: '/',
      component: 'src/pages/Home',
      getData: () => ({ title: 'AraCon' }),

    },
    {
      path: '/speakers',
      component: 'src/pages/Speakers',
      getData: () => ({ title: 'AraCon - Speakers' }),
    },
    {
      path: '/speakerapplication',
      component: 'src/pages/SpeakerApplication',
      getData: () => ({ title: 'AraCon - Speaker Application' }),
    },
    {
      path: '/empty-agenda',
      component: 'src/pages/EmptyAgenda',
      getData: () => ({ title: 'AraCon - Agenda' }),
    },
    {
      path: '/agenda',
      component: 'src/pages/Agenda',
      getData: () => ({ title: 'AraCon - Agenda' }),
    },
    {
      path: '/volunteer',
      component: 'src/pages/Volunteer',
      getData: () => ({ title: 'AraCon - Volunteer' }),
    },
    {
      path: '/contact',
      component: 'src/pages/Contact',
      getData: () => ({ title: 'AraCon - Contact' }),
    },
    {
      path: '/contact-thanks',
      component: 'src/pages/ContactThanks',
      getData: () => ({ title: 'AraCon - Contact' }),
    },
    {
      path: '/faq',
      component: 'src/pages/Faq',
      getData: () => ({ title: 'AraCon - FAQ' }),
    },
    {
      path: '/travel-information',
      component: 'src/pages/Travel',
      getData: () => ({ title: 'AraCon - Travel Information' }),
    },
    {
      path: '/satellite-events',
      component: 'src/pages/SatelliteEvents',
      getData: () => ({ title: 'AraCon - Satellite Events' }),
    },
    {
      path: '/partners',
      component: 'src/pages/Partners',
      getData: () => ({ title: 'AraCon - Partners' }),
    },
    {
      is404: true,
      component: 'src/pages/NotFound',
      getData: () => ({ title: 'AraCon - Page Not Found' }),
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
            <link rel="icon" href="/favicon.ico" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@AragonProject" />
            <meta name="twitter:creator" content="@AragonProject" />
            <meta name="twitter:description" content="AraCon: Building organizations & governance of the future. 29th-30th of January 2019 in Berlin" />
            <meta name="twitter:title" content="AraCon" />
            <meta name="twitter:image" content="https://raw.githubusercontent.com/aragon/aracon-website/master/public/twitter-card.png" />
            <meta property="og:title" content="AraCon – 29th-30th of January 2019 in Berlin" />
            <meta property="og:description" content="AraCon: Building organizations & governance of the future." />
            <meta property="og:url" content="https://aracon.one/" />
            <meta property="og:site_name" content="AraCon" />
            <meta property="og:image" content="https://raw.githubusercontent.com/aragon/aracon-website/master/public/card.png" />
            <meta property="og:image:secure_url" content="https://raw.githubusercontent.com/aragon/aracon-website/master/public/card.png" />
            {renderMeta.styleTags}
          </Head>
          <Body>
            {children}
            <script
              dangerouslySetInnerHTML={{ __html: this.analyticsCode() }}
            />
          </Body>
        </Html>
      )
    }
  },
}
