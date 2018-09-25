import React from 'react'
import FooterSection from '../Section/Section'
import { Text, breakpoint, SafeLink } from '@aragon/ui'
import styled from 'styled-components'
import footer from './assets/footer.png'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Box = styled.div`
  width: 100%;
  height: auto;
  padding: 50px 8.5%;
  background-image: radial-gradient(circle at 51% 42%, #201f2f, #100e18);
  text-align: center;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  ${large('flex-direction: row;')};
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 20px;
  ${medium('flex-direction: row;')};
  ${large('margin: 0;')};
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
  margin: auto;
  ${large('margin-left: 0;')};
`;

const Footer = ({ ...props }) => (
  <FooterSection>
    <Box>
      <FooterImg src={footer} alt="Powered by Aragon" />
      <FooterLinks>
        <SafeLink href="https://wiki.aragon.org/documentation/legal/Privacy_policy/" target="_blank">Privacy policy</SafeLink>
        <SafeLink href="https://wiki.aragon.org/documentation/legal/Terms_of_use_websites/" target="_blank">Terms of use</SafeLink>
        <SafeLink href=" https://wiki.aragon.org/documentation/Code_of_Conduct/" target="_blank">Code of conduct</SafeLink>
      </FooterLinks>
    </Box>
  </FooterSection>
);

export default Footer