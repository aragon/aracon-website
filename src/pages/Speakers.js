import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import Forms from '../components/Forms/Forms'
import Speaker from '../components/Speakers/Speaker'
import { Text, breakpoint } from '@aragon/ui'
import styled from 'styled-components'
import { Link } from 'react-static'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const SpeakersBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: white;
  text-align: center;
  .h1box {
    max-width: 1200px;
    margin: auto;
  }
  p {
    color: #63B1F1;   
    font-size: 19px;  
    line-height: 27px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1195px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 40px;
  a {
    color: #63B1F1;   
    font-size: 19px;  
    line-height: 27px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  max-width: 695px;
  background: white;
  margin: 70px auto 160px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 42px;
    font-weight: bold;
    text-align: center;
    color: #18181a;
  }
  p {
    font-size: 19px;
    line-height: 1.42;
    text-align: center;
    color: #45494d;
  }

  p a {
    color: #61b2f0;
    text-decoration: none;
  }
`;

const Speakers = () => (
  <Page path="/speakers">
    <Section>
      <SpeakersBox>
        <div className="h1box"><h1>Speakers</h1></div>
        <Container>
          <Speaker photo="Luis Cuende" linkTo="luis" name="Luis Cuende" position="CEO" company="Aragon One"
            bio="Luis is the CEO of Aragon One, one of the teams working on the Aragon project. Luis has been 
            into crypto since 2011, and loves how decentralized organizations can solve the world’s worst 
            problems. Luis has been awarded as the best underage European programmer in 2011, is a Forbes 30 
            Under 30, a MIT TR35 and was an Advisor to the VP of the European Commission. He cofounded the 
            blockchain startup Stampery. Prior to founding startups, he created the world's first Linux 
            distribution with facelogin."/>
          <Speaker photo="Griff Green" linkTo="griff" name="Griff Green" position="Co-founder" company="Giveth & Aragon DAC"
            bio="Community manager for TheDAO, led the cleanup effort for TheDAO Hack from every angle, co-founder of 
            the White Hat Group and Giveth and leading the creation of the Aragon DAC, as well as advising DAppNode, 
            0KIMS (iden3), ETHSignals, Open Source Blockchain Explorers NOW! and many other groups within the Ethereum 
            Community."/>
          <Speaker photo="Jutta Steiner" linkTo="jutta" name="Jutta Steiner" position="Co-Founder and CEO" company="Parity Technologies"
            bio="Dr Jutta Steiner is the co-founder and CEO of Parity Technologies, a blockchain technology company best 
            known for Parity Ethereum, the most advanced Ethereum client. Previously, Jutta served as Chief of Security 
            for the Ethereum Foundation and pioneered blockchain use in supply chains as Project Provenance co-founder."/>
          <Speaker photo="Trent McConaghy" linkTo="trent" name="Trent-McConaghy" position="Co-founder" company="BigchainDB"
            bio="Trent McConaghy did AI research for two decades, including machine creativity and 
            AI to help drive Moore's Law, via two startups (both acquired) and a PhD. Now he 
            focuses on AI * blockchain, via Ocean to democratize AI data, and BigchainDB 
            decentralized database. His hobbies include Token Engineering and advising governments 
            on AI * blockchain"/>
          <Speaker photo="Santiago Siri" linkTo="santiago" name="Santiago Siri" position="Founder" company="Democracy Earth Foundation" 
            bio="Founder of Democracy Earth Foundation, a Y Combinator backed non-profit building 
            incorruptible digital governance technology; and the Partido de la Red (Peers Party), 
            the first digital political party that ran for elections with candidates committed to 
            people's will online. Partner of Bitex.la, a leading bitcoin exchange in Latin America. 
            Published 'Hacktivismo' in 2015 with Random House. Member of the World Economic Forum 
            since 2012. Awarded by MIT Technology Review and Singularity University. Co-founded 
            Argentine Game Developers Association in 2002."/>
          <Speaker photo="Joe Urgo" linkTo="joe" name="Joe Urgo" position="Co-Founder" company="District0x"
            bio="Joe is a co-founder of district0x, a network of decentralized marketplaces and CEO at Sourcerers, 
            a consultancy firm supporting leading Ethereum-based projects. Joe previously spent three years 
            as an Operations Manager at Coinbase. Prior to Coinbase, he was a derivatives trader for Three 
            Arrows Capital, an international hedge fund based in Singapore. Joe serves as an advisor at Status, 
            Keep, SpankChain, Bloom, Witnet, Abacus, Access Network, LiquidX, Fabric Ventures, Republic, and 
            Common Interest."/>
          <Speaker photo="Lane Rettig" linkTo="lane" name="Lane Rettig" position="Independent Core Developer" company="Ewasm"
            bio="Lane Rettig is an independent Ethereum core developer and a member of the Ewasm team, where he 
            is helping build the execution engine for Ethereum 2.0 (the Shasper roadmap). He is also the founder 
            of Crypto NYC, a Manhattan-based, blockchain-focused community and coworking space dedicated to making 
            Web3 technology accessible to all humans."/>
          <Speaker photo="Primavera De Filippi" linkTo="primavera" name="Primavera De Filippi" position="Postdoctoral researcher" company="National Center of Scientific Research (CNRS)"
            bio="Primavera De Filippi is a permanent researcher at the National Center of Scientific 
            Research (CNRS) in Paris, a faculty associate at the Berkman-Klein Center for Internet & 
            Society at Harvard University, and a Visiting Fellow at the Robert Schuman Centre for 
            Advanced Studies at the European University Institute."/>
          <Speaker photo="Mike Goldin" linkTo="mike" name="Mike Goldin" position="Lead Engineer" company="Cryptosystems Productization Lab, ConsenSys"
            bio="Mike is the author of “token-curated registries 1.0”, a widely-cited paper which 
            originally formalized the basic design and properties of such cryptosystems. He launched 
            adChain and implemented its token sale, which sold out in one block. He has overseen and 
            facilitated the development of a widely-used TCR implementation, as well as multiple 
            graphical user interfaces for TCRs. He graduated from Columbia University with a degree 
            in computer science."/>
          <Speaker photo="Matt Lockyer" linkTo="matt" name="Matt Lockyer" position="Founder" company="Soloblock Solutions"
            bio="Matt Lockyer wrote the Ethereum ERC-998 standard for Composable Tokens and his work 
            on Token Curated Registries (TCRs) has been published on a16z's crypto reading list. Matt 
            founded and operates the NFTy Magicians - a group of over 300 blockchain developers - as a 
            pendant to the Ethereum Foundation. He currently advises projects on their smart contract 
            architecture and token engineering processes with a background in full stack development, 
            computer science, UX research, public speaking and university lecturing."/>
          <Speaker photo="Mario Laul" linkTo="mario" name="Mario Laul" position="Researcher" company="Placeholder Ventures"
            bio="Mario Laul works as a researcher for Placeholder, a New York venture capital firm investing 
            in decentralized information networks, and for Beyond the Technological Revolution, a four-year 
            research project led by Carlota Perez exploring the relationship between technology, finance, 
            and public policy. Each fall, he teaches an introductory course on the sociology of culture at 
            the Estonian Academy of Arts in Tallinn, and is looking to combine the study of technology governance 
            with a sociologically informed perspective on emerging forms of decentralized economic 
            and social coordination."/>
          <Speaker photo="Martin Koppelmann" linkTo="martin" name="Martin Köppelmann" position="CEO and Co-founder" company="Gnosis"
            bio="Martin Köppelmann has been an entrepreneur in the blockchain space for more than 5 years. 
            He is the CEO and co-founder of Gnosis, the decentralized Gnosis prediction market - one of the 
            first decentralized application that went live on Ethereum in 2015 in an early verison."/>
          <Speaker photo="Raine Revere" linkTo="raine" name="Raine Revere" position="Co-foundeer" company="Maiden"
            bio="Raine Revere is an engineer and educator in the Ethereum community who has spoken 
            at blockchain events around the world. Raine is the Lead Architect of ShapeShift Prism 
            and is the co-founder of Maiden, a company that delivers socially-aware blockchain 
            education, cultural & leadership development, and diversity-powered blockchain 
            consulting. As a therapist, teacher, and cryptocurrency engineer, Raine has the unique 
            capacity to engage deeply with both the technical and social aspects of technology."/>
          <Speaker photo="Aron Fischer" linkTo="aron" name="Aron Fischer" position="Governance Researcher" company="Colony"
            bio="Aron Fischer received his PhD in mathematics from the City University of New York in 2015. He is working 
            in the research arm of Colony: a platform for open organizations which seeks to enable new forms of 
            decentralised organizations. The work involves a careful balancing of what is desirable 
            in terms of governance and what is possible given the technical limitations of the Ethereum blockchain."/>
          <Speaker photo="Maria Gomez" linkTo="maria" name="María Gómez" position="Ecosystem Development" company="Aragon One"
            bio="María Gómez is a former corporate lawyer. She worked several years in the M&A and corporate finance 
            practice. Currently she works on ecosystem development for Aragon.one, one of the teams working for the 
            Aragon project. "/>
        </Container>
        <p>More speakers coming soon</p>
      </SpeakersBox>
    </Section>
    <Section className="white">
      <TextContainer>
        <h2>Want to Speak at AraCon 2019?</h2>
        <p>If you would like to join a panel or do a talk at AraCon on anything related to governance, blockchain, future of work or borderless collaboration - please <Link to="/speakersapplication">apply here</Link> before November 10th.</p>
      </TextContainer>
    </Section>
  </Page>
);

export default Speakers
