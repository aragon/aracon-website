import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, Button, theme, breakpoint } from '@aragon/ui'
import styled from 'styled-components'

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
    font-size: 35px;
  }
  img {
    width: 118px;
  }
  u {
    -webkit-text-fill-color: white;
  }
`;

class SpeakerApplication extends React.Component {
  state = { active: 'dayOne' };

  render() {
    const { active } = this.state;
    return (
      <Page path="/agenda">
        <Section className="dark all-page">
          <Container>
            <Text>
              <div className="h1box">
                <h1>Speaker applications are now closed.</h1>
              </div>
            </Text>
          </Container>
        </Section>
      </Page>
    )
  }
}

export default SpeakerApplication
