import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, Button, theme, breakpoint } from '@aragon/ui'
import styled from 'styled-components'
import live from '../components/Home/assets/live.svg'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  background: #18181a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 116px) !important;
  h1 {
    text-align: center;
    margin-top: 30px;
  }
  iframe {
    width: 69vw;
    height: 45vw;
    max-width: 100%;
    max-height: 70vh;
  }
  p {
    text-align: center;
    color: #dad7d7;
  }
`

class Livestream extends React.Component {
  state = { active: 'dayOne' }

  render() {
    const { active } = this.state
    return (
      <Page path="/livestream">
        <Section className="dark all-page">
          <Container>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/k-ZoXV6D4H4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </Container>
        </Section>
      </Page>
    )
  }
}

export default Livestream
