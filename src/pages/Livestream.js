import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, Button, theme, breakpoint } from '@aragon/ui'
import styled from 'styled-components'
import live from '../components/Home/assets/live.svg'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  background: #18181A;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 116px)!important;
  h1 {
    text-align: center;
    margin-top: 30px;
  }
  iframe {
    width: 100vw;
    height: calc(100vh - 64px);
    max-width: 100%;
    max-height: 70vh;
  }
  p {
    text-align: center;
    color: #dad7d7;
  }

`;

class Livestream extends React.Component {
  state = { active: 'dayOne' };

  render() {
    const { active } = this.state;
    return (
      <Page path="/livestream">
        <Section className="dark all-page">
          <Container>
            <iframe src="https://d1sehmygbqvrdw.cloudfront.net/embed/0x92A4Fa40edd4931DB19Fbb48751B270b1dE55997" frameBorder="0" allow="autoplay; encrypted-media"  allowFullScreen></iframe>
          </Container>
        </Section>
      </Page>
    )
  }
}

export default Livestream
