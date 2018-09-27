import React from 'react'
import Section from '../Section/Section'
import styled from 'styled-components'
import { Link } from 'react-static'
import livestream from './assets/livestream.svg'
import { Text, Button, breakpoint } from '@aragon/ui'

const medium = css => breakpoint('medium', css);

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: #18181A;
  text-align: center;
  display: flex;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  div {
    width: 100%;
    text-align: center;
    ${medium('text-align: left;')};
  }
  .text {
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${medium('padding-right: 60px; align-items: flex-start;')};
    p {
      color: white;
    }
  }
  .button-strong-div {
    justify-content: center;
    ${medium('justify-content: flex-start;')};
  }
  iframe {
    ${medium('padding-left: 60px; width: 100%')};
    margin-top: 60px;
    ${medium('margin-top: 0;')};
    min-height: 300px;
  }
  
`;

const Livestream = () => (
  <Section>
    <Container>
      <div className="text">
        <Text>
          <div className="h1box">
            <h1>Livestream</h1>
          </div>
        </Text>
        <Text>
          <p>If you can not make it to Berlin this time, you can still participate in the event. The conference program will be fully livestreamed.</p>
          <br/>
        </Text>
        <div className="button-strong-div"><Link className="button-strong" to="/livestream"><span>Watch the livestream</span></Link></div>
      </div>
      <iframe className="livestream-video" src="https://www.youtube-nocookie.com/embed/49hXxj31e7c?rel=0&amp;ecver=2" frameBorder="0" allow="autoplay; encrypted-media"  allowFullScreen></iframe>
    </Container>
  </Section>
);

export default Livestream
