import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import { Text, SafeLink, theme, breakpoint } from '@aragon/ui'
import styled from 'styled-components'
import partners from './assets/partners.png'
import district from './assets/district.png'
import ethnews from './assets/eth-news.png'
import bnc from './assets/bnc.png'

const large = css => breakpoint('large', css);
const medium = css => breakpoint('medium', css);

const TextContainer = styled.div`
  width: 100%;
  padding: 50px 0 50px 0;
  text-align: left;
  ${large('width: 100%;')};
  p {
    color: #dad7d7;
  }
  h3 {
    color: #dad7d7;
  }
`;

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

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: column;
  ${large('flex-direction: row;')};
  margin: 30px -15px;
  p {
    padding-top: 10px;
  }
  div {
    width: 100%;
  }
`;
const PartnersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  margin: 0 auto 90px auto;
  padding-top: 40px;
  width: 83%;
  a {
    padding: 20px 0px;
    ${medium('padding: 0px 52px;')};
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const PartnersBox = styled.div`
  text-align: right;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  ${medium('align-items: flex-end; justify-content: flex-end;')};
  img {
    max-width: 90%;
    margin-bottom: -62px;
  }
`

const DistrictBox = styled.div`
  padding: 50px 0 50px 0!important;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: row;

  p {
    padding-left: 15px;
    color: #dad7d7;
  }

`;

const Partners = () => (<Page path="/partners">
<Section className="dark dark-form ">
  <OuterContainer>
    <FlexContainer>
      <TextContainer>
        <div className="h1box" id="speakers-form"><h1>Scholarship partners</h1></div>
          <Text>
            <p>Our vision for AraCon is to gather Aragon’s global community, therefore we want everyone interested
            in joining the event to be able to attend. We joined forces with District0x to enable community members
            in need of financial help, to travel to Berlin. The scholarship recipients will get a conference ticket,
            round-trip flight and accommodation during the conference fully covered.</p><br />
            <p>The applications were closed on November 23rd. Everyone was welcome to apply, but the advantage was
            given to applicants who have contributed the most to the Aragon community and are in financial hardship,
            applicants from emerging countries/regions where the average wage is lower and the applicants who'll be
            using Aragon's platform in the future. </p><br />
          </Text>
          <a href="https://district0x.io/" target="_blank">
            <DistrictBox>
              <img src={district}/>
              <p>The district0x network is a collective of decentralized marketplaces and communities known as ‘Districts’. Powered by Ethereum, Aragon, and IPFS.</p>
            </DistrictBox>
          </a>
        </TextContainer>
        <PartnersBox>
          <img src={partners} />
        </PartnersBox>
      </FlexContainer>
    </OuterContainer>
  </Section>
  <Section>
    <OuterContainer>
      <TextContainer>
        <div className="h1box" id="speakers-form"><h1>Media partners</h1></div>
      </TextContainer>
    </OuterContainer>
    <PartnersContainer>
      <a href="https://www.ethnews.com/" target="_blank"><img src={ethnews} /></a>
      <a href="https://bravenewcoin.com/" target="_blank"><img src={bnc} /></a>
    </PartnersContainer>
  </Section>
</Page>);

export default Partners
