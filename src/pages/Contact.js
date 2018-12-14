import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, SafeLink, theme, breakpoint, Button } from '@aragon/ui'
import styled from 'styled-components'
import Forms from '../components/Forms/Forms'

const large = css => breakpoint('large', css);

const OuterContainer = styled.div`
  position: relative;
  max-width: 1540px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${large('justify-content: space-between; max-width: 1440px !important; margin: auto; flex-direction: row;')};
  padding-top: 40px;
  width: 83%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 695px;
  padding: 50px 0 50px 0;
  text-align: left;
  ${large('width: 41%;')};
  p {
    color: #dad7d7;
  }
`;

const Form = styled.form`
  display: block;
  input, textarea {
    display: block;
    background: #FFF;
    border: 1px solid #999;
    box-sizing: border-box;
    padding: 6px;
    -webkit-transition: all 0.1s linear;
    transition: all 0.1s linear;
    border-radius: 0;
    background-clip: padding-box;
    width: 400px;
    max-width: 100%;
    margin: 0 0 50px 0;
  }
  p {
    font-size: 20px !important;
    color: white;
    padding-bottom: 15px;
  }
`;

const Contact = () => (
  <Page path="/contact">
    <Section className="dark dark-form all-page">
      <OuterContainer>
        <Container>
          <Text><div className="h1box"><h1>Contact</h1></div></Text>
          <Text>
            <p>If you have any questions, ideas or suggestions, please contact us through this form or at <a href="mailto:info@aracon.one">info@aracon.one</a></p>
          </Text>
          <br/>
        </Container>
        <div>
        <Form action="https://formspree.io/info@aracon.one" method="POST">
          <p>Full Name</p>
          <input type="text" name="name" placeholder="Full Name"/>
          <p>Email</p>
          <input type="email" name="_replyto" placeholder="Email"/>
          <p>Message</p>
          <textarea type="text" rows="4" name="message" placeholder="Message"/>
          <input type="hidden" name="_next" value="https://aracon.one/contact-thanks" />
          <Button mode="strong" type="submit">SEND</Button>
        </Form>
        </div>
      </OuterContainer>
    </Section>
  </Page>
);

export default Contact
