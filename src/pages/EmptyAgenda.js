import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, Button, theme, breakpoint } from '@aragon/ui'
import styled from 'styled-components'
import agenda from '../components/Home/assets/agenda.svg'

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
`;

class Agenda extends React.Component {
  state = { active: 'dayOne' };

  render() {
    const { active } = this.state;
    return (
      <Page path="/agenda">
        <Section className="dark all-page">
          <Container>
            <img src={agenda} alt="live"/>
            <Text>
              <div className="h1box">
                <h1>The full agenda is currently being finalized.<br /><a href="http://eepurl.com/dHogTD" target="_blank" rel="noopener noreferrer">Sign up <u>here</u> for our newsletter to get the latest updates</a>.</h1>
              </div>
            </Text>
          </Container>
        </Section>
      </Page>
    )
  }
}

export default Agenda
