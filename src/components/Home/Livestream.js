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
    ${medium('padding-right: 60px;')};
    p {
      color: white;
    }
  }
  .image {
    ${medium('padding-left: 60px;')};
    margin-top: 60px;
    ${medium('margin-top: 0;')};
    img {
      width: 100%;
    }
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
        </Text>
        <br/>
        <Button mode="strong">
          <Link to="/livestream">Watch the livestream</Link>
        </Button>
      </div>
      <div className="image">
        <img src={livestream} alt="livestream" />
      </div>
    </Container>
  </Section>
);

export default Livestream
