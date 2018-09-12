import React from 'react'
import FooterSection from '../Section/Section'
import { Text } from '@aragon/ui'
import styled from 'styled-components'
import footer from './assets/footer.png'

const Box = styled.div`
  width: 100%;
  height: auto;
  padding: 50px 8.5%;
  background-image: radial-gradient(circle at 51% 42%, #201f2f, #100e18);
  text-align: center;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  &.landing-footer {
    margin-top: -15vh;
    padding-top: calc(15vh + 50px);
  }
`;

const FooterImg = styled.img`
  max-width: 100%;
`;

const Footer = ({ ...props }) => (
  <FooterSection>
    <Box className={props.path === '/' ? 'landing-footer' : ''}>
      <FooterImg src={footer} alt="Powered by Aragon" />
    </Box>
  </FooterSection>
);

export default Footer