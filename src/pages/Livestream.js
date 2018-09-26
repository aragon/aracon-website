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
  padding: 50px 8.5%;
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
  img {
    width: 95px;
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
            <img src={live} alt="live"/>
            <Text>
              <div className="h1box">
                <h1>Oops! We are not live yet!</h1>
              </div>
            </Text>
          </Container>
        </Section>
      </Page>
    )
  }
}

export default Livestream
