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
  justify-content: space-between;
`;
const FooterLinks = styled.div`
  display: flex;
  a {
    margin: 0 10px;
    opacity: 0.38;
    font-size: 17px;
    color: #ffffff;
    font-weight: 600;
    text-decoration: none;
  }
  a:hover {
    opacity: 1;
  }
`;

const FooterImg = styled.img`
  max-width: 100%;
  width: 360px;
`;

const Footer = ({ ...props }) => (
  <FooterSection>
    <Box>
      <FooterImg src={footer} alt="Powered by Aragon" />
      <FooterLinks>
        <a href="https://wiki.aragon.org/documentation/legal/Privacy_policy/" target="_blank">Privacy policy</a>
        <a href="https://wiki.aragon.org/documentation/legal/Terms_of_use_websites/" target="_blank">Terms of use</a>
        <a href=" https://wiki.aragon.org/documentation/Code_of_Conduct/" target="_blank">Code of conduct</a>
      </FooterLinks>
    </Box>
  </FooterSection>
);

export default Footer