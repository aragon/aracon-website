import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, SafeLink, theme } from '@aragon/ui'
import styled from 'styled-components'
import oval from '../components/Home/assets/oval.svg'
import { Link } from 'react-static'

const Criteria = styled.ul`
  text-align: left;
  font-size: 19px;
  font-weight: 400;
  line-height: 1.5;
  list-style-image: url(${oval});
  list-style-position: inside;
  color: #707070
  a {
    color: #61B2F0;
  }
  a:hover {
    color: #0088f3;
  }
`;
const Container = styled.div`
  width: 100%;
  padding: 50px 8.5%;
  h3 {
    margin-bottom: 5px;
    margin-top: 10px;
  }

  a.button-strong2 {
    text-decoration: none;
    width: auto;
    padding: 10px 15px;
    margin-left: 15px;
    white-space: nowrap;
    line-height: 1;
    font-size: 15px;
    border: 0;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0,0,0,0);
    color: #FFFFFF;
    background-image: linear-gradient( 130deg,#562fbb,#be64d6 );
    display: flex;
    align-items: center;
    span {
      font-weight: 800;
    }
`;

const Registration = () => (
  <Page path="/registration">
    <Section className="white all-page">
      <Container>
        <Text><div className="h1box"><h1>Registration</h1></div></Text>
        <Text>
          <h3>Registration for #AraCon2019 is now closed</h3>
          <p>If you have any questions, you can contact us at info@aracon.one.</p><br />
        </Text>
    </Container>
    </Section>
  </Page>
);

export default Registration
