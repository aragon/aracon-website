import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import DayOne from '../components/Agenda/DayOne'
import DayTwo from '../components/Agenda/DayTwo'
import { Text, Button, theme, breakpoint } from '@aragon/ui'
import styled from 'styled-components'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 50px 8.5%;
  background: #18181A;
  button {
    width: 50%;
    height: 58px;
    font-size: 17px;
    font-weight: 700;
    color: #000000;
    padding: 0;
  }
  .first-button {
    border-radius: 3px 0 0 0;
  }
  .second-button {
    border-radius: 0 3px 0 0;
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
            <Text><div className="h1box"><h1>Agenda</h1></div></Text>
            {/* 
              Hiding agenda till we have the schedule
              <Button className="first-button" 
                      mode={ active === 'dayOne' ? 'normal' : 'secondary' }
                      onClick={() => this.setState({ active: 'dayOne' })}
              >
                Tuesday Jan 29
              </Button>
              <Button className="second-button" 
                      mode={ active !== 'dayOne' ? 'normal' : 'secondary' }
                      onClick={() => this.setState({ active: 'dayTwo' })}
              >
                Wednesday Jan 30
              </Button>
              { active === 'dayOne' ? <DayOne/> : <DayTwo/> }
              
           */}
            <p>The full agenda of AraCon is currently being finalised. Please check back for updates soon.</p>
          </Container>
        </Section>
      </Page>
    )
  }
}

export default Agenda
