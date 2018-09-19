import React from 'react'
import { Page } from '../components'
import Section from '../components/Section/Section'
import Forms from '../components/Forms/Forms'
import Speaker from '../components/Speakers/Speaker'
import { Text, breakpoint } from '@aragon/ui'
import styled from 'styled-components'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const SpeakersBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: white;
  text-align: center;
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
  margin: auto;
  max-width: 695px;
  padding: 50px 0 50px 8.5%;
  text-align: left;
  ${large('position: absolute; width: 41%; margin: inherit')};
`;

const Triangle = styled.div`
 clip-path: polygon(
    0 6vw, /* left top */
    100% 0, /* right top */ 
    100% 100%, /* right bottom */
    0 100% /* left bottom */
  );
  height: 6vw;
  background: #18181A;
`;

const Speakers = () => (
  <Page path="/speakers">
    <Section>
      <SpeakersBox>
        <div className="h1box"><h1>Speakers</h1></div>
        <Container>
          <Speaker photo="Trent McConaghy" name="Trent-McConaghy" position="Co-founder" company="BigchainDB"
            bio="Trent McConaghy did AI research for two decades, including machine creativity and 
            AI to help drive Moore's Law, via two startups (both acquired) and a PhD. Now he 
            focuses on AI * blockchain, via Ocean to democratize AI data, and BigchainDB 
            decentralized database. His hobbies include Token Engineering and advising governments 
            on AI * blockchain"/>
          <Speaker photo="Shira Frank" name="Shira-Frank" position="Co-founder" company="Maiden"
            bio="Shira brings over 15 years of work in politics, social change, women’s philanthropy, 
            and fundraising with her to the Blockchain and Fin-Tech industries. Shira spent seven years 
            as a Deputy Director for J Street working to transform the way Congress and the Executive 
            branch engage in the Middle East and to promote the creation of a two-state solution to the 
            Israeli-Palestinian conflict. Shira holds a degree in Government and Political Theory from 
            Smith College. "/>
          <Speaker photo="Santiago Siri" name="Santiago Siri" position="Founder" company="Democracy Earth Foundation" 
            bio="Founder of Democracy Earth Foundation, a Y Combinator backed non-profit building 
            incorruptible digital governance technology; and the Partido de la Red (Peers Party), 
            the first digital political party that ran for elections with candidates committed to 
            people's will online. Partner of Bitex.la, a leading bitcoin exchange in Latin America. 
            Published 'Hacktivismo' in 2015 with Random House. Member of the World Economic Forum 
            since 2012. Awarded by MIT Technology Review and Singularity University. Co-founded 
            Argentine Game Developers Association in 2002."/>
          <Speaker photo="Raine Revere" linkTo="raine" name="Raine Revere" position="Co-foundeer" company="Maiden"
            bio="Raine Revere is an engineer and educator in the Ethereum community who has spoken 
            at blockchain events around the world. Raine is the Lead Architect of ShapeShift Prism 
            and is the co-founder of Maiden, a company that delivers socially-aware blockchain 
            education, cultural & leadership development, and diversity-powered blockchain 
            consulting. As a therapist, teacher, and cryptocurrency engineer, Raine has the unique 
            capacity to engage deeply with both the technical and social aspects of technology."/>
          <Speaker photo="Primavera De Filippi" linkTo="primavera" name="Primavera De Filippi" position="Postdoctoral researcher" company="National Center of Scientific Research (CNRS)"
            bio="Primavera De Filippi is a permanent researcher at the National Center of Scientific 
            Research (CNRS) in Paris, a faculty associate at the Berkman-Klein Center for Internet & 
            Society at Harvard University, and a Visiting Fellow at the Robert Schuman Centre for 
            Advanced Studies at the European University Institute."/>
          <Speaker photo="Mike Goldin" name="Mike Goldin" position="Lead Engineer" company="Cryptosystems Productization Lab, ConsenSys"
            bio="Mike is the author of “token-curated registries 1.0”, a widely-cited paper which 
            originally formalized the basic design and properties of such cryptosystems. He launched 
            adChain and implemented its token sale, which sold out in one block. He has overseen and 
            facilitated the development of a widely-used TCR implementation, as well as multiple 
            graphical user interfaces for TCRs. He graduated from Columbia University with a degree 
            in computer science."/>
          <Speaker photo="Matt Lockyer" name="Matt Lockyer" position="Founder" company="Soloblock Solutions"
            bio="Matt Lockyer wrote the Ethereum ERC-998 standard for Composable Tokens and his work 
            on Token Curated Registries (TCRs) has been published on a16z's crypto reading list. Matt 
            founded and operates the NFTy Magicians - a group of over 300 blockchain developers - as a 
            pendant to the Ethereum Foundation. He currently advises projects on their smart contract 
            architecture and token engineering processes with a background in full stack development, 
            computer science, UX research, public speaking and university lecturing."/>
          <Speaker photo="Mario Laul" name="Mario Laul" position="Researcher" company="Placeholder Ventures"
            bio="Mario Laul works as a researcher for Placeholder, a New York venture capital firm investing 
            in decentralized information networks, and for Beyond the Technological Revolution, a four-year 
            research project led by Carlota Perez exploring the relationship between technology, finance, 
            and public policy. Each fall, he teaches an introductory course on the sociology of culture at 
            the Estonian Academy of Arts in Tallinn, and is looking to combine the study of technology governance 
            with a sociologically informed perspective on emerging forms of decentralized economic 
            and social coordination."/>
          <Speaker photo="Maria Paula Fernandez" name="María Paula Fernández" position="Communications Lead" company="Golem Project"
            bio="Maria leads communications in Golem Projects, helping their devs bridge the gap between 
            users and code. She also helps the Ethereum Community Fund in their communications strategy, 
            and some developer reachout for the grants. This year, she organized ETHBerlin, a 900-people 
            hackathon that delivered amazing projects, and was 80% run on dApps, including using the Aragon 
            Survey for voting on one of their Bounties."/>
          <Speaker photo="Martin Koppelmann" name="Martin Köppelmann" position="CEO and Co-founder" company="Gnosis"
            bio="Martin Köppelmann has been an entrepreneur in the blockchain space for more than 5 years. 
            He is the CEO and co-founder of Gnosis, the decentralized Gnosis prediction market - one of the 
            first decentralized application that went live on Ethereum in 2015 in an early verison."/>
          <Speaker photo="Luis Cuende" name="Luis Cuende" linkTo="luis" position="CEO" company="Aragon One"
            bio="Luis is the CEO of Aragon One, one of the teams working on the Aragon project. Luis has been 
            into crypto since 2011, and loves how decentralized organizations can solve the world’s worst 
            problems. Luis has been awarded as the best underage European programmer in 2011, is a Forbes 30 
            Under 30, a MIT TR35 and was an Advisor to the VP of the European Commission. He cofounded the 
            blockchain startup Stampery. Prior to founding startups, he created the world's first Linux 
            distribution with facelogin."/>
          <Speaker photo="Lane Rettig" name="Lane Rettig" position="Independent Core Developer" company="Ewasm"
            bio="Lane Rettig is an independent Ethereum core developer and a member of the Ewasm team, where he 
            is helping build the execution engine for Ethereum 2.0 (the Shasper roadmap). He is also the founder 
            of Crypto NYC, a Manhattan-based, blockchain-focused community and coworking space dedicated to making 
            Web3 technology accessible to all humans."/>
          <Speaker photo="Jutta Steiner" name="Jutta Steiner" linkTo="jutta" position="Co-Founder and CEO" company="Parity Technologies"
            bio="Dr Jutta Steiner is the co-founder and CEO of Parity Technologies, a blockchain technology company best 
            known for Parity Ethereum, the most advanced Ethereum client. Previously, Jutta served as Chief of Security 
            for the Ethereum Foundation and pioneered blockchain use in supply chains as Project Provenance co-founder."/>
          <Speaker photo="Joe Urgo" name="Joe Urgo" linkTo="joe" position="Co-Founder" company="District0x"
            bio="Joe is a co-founder of district0x, a network of decentralized marketplaces and CEO at Sourcerers, 
            a consultancy firm supporting leading Ethereum-based projects. Joe previously spent three years 
            as an Operations Manager at Coinbase. Prior to Coinbase, he was a derivatives trader for Three 
            Arrows Capital, an international hedge fund based in Singapore. Joe serves as an advisor at Status, 
            Keep, SpankChain, Bloom, Witnet, Abacus, Access Network, LiquidX, Fabric Ventures, Republic, and 
            Common Interest."/>
          <Speaker photo="Griff Green" name="Griff Green" linkTo="griff" position="Co-founder" company="Giveth & Aragon DAC"
            bio="Community manager for TheDAO, led the cleanup effort for TheDAO Hack from every angle, co-founder of 
            the White Hat Group and Giveth and leading the creation of the Aragon DAC, as well as advising DAppNode, 
            0KIMS (iden3), ETHSignals, Open Source Blockchain Explorers NOW! and many other groups within the Ethereum 
            Community."/>
          <Speaker photo="Aron Fischer" name="Aron Fischer" position="Governance Researcher" company="Colony"
            bio="Aron Fischer received his PhD in mathematics from the City University of New York in 2015. He is working 
            in the research arm of Colony: a platform for open organisations which seeks to enable new forms of 
            decentralised organisations. The work involves a careful balancing of what is desirable 
            in terms of governance and what is possible given the technical limitations of the Ethereum blockchain."/>
          <Speaker photo="Maria Gomez" name="María Gómez" linkTo="maria" position="Strategy & Operations" company="Aragon One"
            bio="María Gómez is a former corporate lawyer. She worked several years in the M&A and corporate finance 
            practice. Currently she works on ecosystem development for Aragon.one, one of the teams working for the 
            Aragon project. "/>
        </Container>
      </SpeakersBox>
    </Section>
    <Triangle/>
    <Section className="dark">
      <TextContainer>
        <div className="h1box" id="speakers-form"><h1>Speakers application</h1></div>
        <p>If you would like to do a workshop or a talk at AraCon on anything related to governance, blockchain, future of work or borderless collaboration - please register here</p>
      </TextContainer>
      <Forms type="speakers" src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2Bnex51b1b2jCZWBQtfTcaOhfvbt_2Fq8nWc81qWg3efVA.js"/>
      <div id="speakers"/>
    </Section>
  </Page>
);

export default Speakers
