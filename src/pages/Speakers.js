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
  margin: auto;
  padding: 70px 10px 160px 10px;
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
          <Speaker photo="LuisCuende" linkTo="luis" name="Luis Cuende" position="CEO" company="Aragon One"
            bio="Luis is the CEO of Aragon One, one of the teams working on the Aragon project. Luis has been
            into crypto since 2011, and loves how decentralized organizations can solve the world’s worst
            problems. Luis has been awarded as the best underage European programmer in 2011, is a Forbes 30
            Under 30, a MIT TR35 and was an Advisor to the VP of the European Commission. He cofounded the
            blockchain startup Stampery. Prior to founding startups, he created the world's first Linux
            distribution with facelogin."/>
          <Speaker photo="GriffGreen" linkTo="griff" name="Griff Green" position="Co-founder" company="Giveth & Aragon DAC"
            bio="Community manager for TheDAO, led the cleanup effort for TheDAO Hack from every angle, co-founder of
            the White Hat Group and Giveth and leading the creation of the Aragon DAC, as well as advising DAppNode,
            0KIMS (iden3), ETHSignals, Open Source Blockchain Explorers NOW! and many other groups within the Ethereum
            Community."/>
          <Speaker photo="JuttaSteiner" linkTo="jutta" name="Jutta Steiner" position="Co-Founder and CEO" company="Parity Technologies"
            bio="Dr Jutta Steiner is the co-founder and CEO of Parity Technologies, a blockchain technology company best
            known for Parity Ethereum, the most advanced Ethereum client. Previously, Jutta served as Chief of Security
            for the Ethereum Foundation and pioneered blockchain use in supply chains as Project Provenance co-founder."/>
          <Speaker photo="TrentMcConaghy" linkTo="trent" name="Trent-McConaghy" position="Co-founder" company="BigchainDB"
            bio="Trent McConaghy did AI research for two decades, including machine creativity and
            AI to help drive Moore's Law, via two startups (both acquired) and a PhD. Now he
            focuses on AI * blockchain, via Ocean to democratize AI data, and BigchainDB
            decentralized database. His hobbies include Token Engineering and advising governments
            on AI * blockchain"/>
          <Speaker photo="SantiagoSiri" linkTo="santiago" name="Santiago Siri" position="Founder" company="Democracy Earth Foundation"
            bio="Founder of Democracy Earth Foundation, a Y Combinator backed non-profit building
            incorruptible digital governance technology; and the Partido de la Red (Peers Party),
            the first digital political party that ran for elections with candidates committed to
            people's will online. Partner of Bitex.la, a leading bitcoin exchange in Latin America.
            Published 'Hacktivismo' in 2015 with Random House. Member of the World Economic Forum
            since 2012. Awarded by MIT Technology Review and Singularity University. Co-founded
            Argentine Game Developers Association in 2002."/>
          <Speaker photo="JoeUrgo" linkTo="joe" name="Joe Urgo" position="Co-Founder" company="District0x"
            bio="Joe is a co-founder of district0x, a network of decentralized marketplaces and CEO at Sourcerers,
            a consultancy firm supporting leading Ethereum-based projects. Joe previously spent three years
            as an Operations Manager at Coinbase. Prior to Coinbase, he was a derivatives trader for Three
            Arrows Capital, an international hedge fund based in Singapore. Joe serves as an advisor at Status,
            Keep, SpankChain, Bloom, Witnet, Abacus, Access Network, LiquidX, Fabric Ventures, Republic, and
            Common Interest."/>
          <Speaker photo="LaneRettig" linkTo="lane" name="Lane Rettig" position="Independent Core Developer" company="Ewasm"
            bio="Lane Rettig is an independent Ethereum core developer and a member of the Ewasm team, where he
            is helping build the execution engine for Ethereum 2.0 (the Shasper roadmap). He is also the founder
            of Crypto NYC, a Manhattan-based, blockchain-focused community and coworking space dedicated to making
            Web3 technology accessible to all humans."/>
          <Speaker photo="PrimaveraDeFilippi" linkTo="primavera" name="Primavera De Filippi" position="Postdoctoral researcher" company="National Center of Scientific Research (CNRS)"
            bio="Primavera De Filippi is a permanent researcher at the National Center of Scientific
            Research (CNRS) in Paris, a faculty associate at the Berkman-Klein Center for Internet &
            Society at Harvard University, and a Visiting Fellow at the Robert Schuman Centre for
            Advanced Studies at the European University Institute."/>
          <Speaker photo="MikeGoldin" linkTo="mike" name="Mike Goldin" position="Lead Engineer" company="Cryptosystems Productization Lab, ConsenSys"
            bio="Mike is the author of “token-curated registries 1.0”, a widely-cited paper which
            originally formalized the basic design and properties of such cryptosystems. He launched
            adChain and implemented its token sale, which sold out in one block. He has overseen and
            facilitated the development of a widely-used TCR implementation, as well as multiple
            graphical user interfaces for TCRs. He graduated from Columbia University with a degree
            in computer science."/>
          <Speaker photo="MattLockyer" linkTo="matt" name="Matt Lockyer" position="Founder" company="Soloblock Solutions"
            bio="Matt Lockyer wrote the Ethereum ERC-998 standard for Composable Tokens and his work
            on Token Curated Registries (TCRs) has been published on a16z's crypto reading list. Matt
            founded and operates the NFTy Magicians - a group of over 300 blockchain developers - as a
            pendant to the Ethereum Foundation. He currently advises projects on their smart contract
            architecture and token engineering processes with a background in full stack development,
            computer science, UX research, public speaking and university lecturing."/>
          <Speaker photo="MarioLaul" linkTo="mario" name="Mario Laul" position="Researcher" company="Placeholder Ventures"
            bio="Mario Laul works as a researcher for Placeholder, a New York venture capital firm investing
            in decentralized information networks, and for Beyond the Technological Revolution, a four-year
            research project led by Carlota Perez exploring the relationship between technology, finance,
            and public policy. Each fall, he teaches an introductory course on the sociology of culture at
            the Estonian Academy of Arts in Tallinn, and is looking to combine the study of technology governance
            with a sociologically informed perspective on emerging forms of decentralized economic
            and social coordination."/>
          <Speaker photo="MartinKoppelmann" linkTo="martin" name="Martin Köppelmann" position="CEO and Co-founder" company="Gnosis"
            bio="Martin Köppelmann has been an entrepreneur in the blockchain space for more than 5 years.
            He is the CEO and co-founder of Gnosis, the decentralized Gnosis prediction market - one of the
            first decentralized application that went live on Ethereum in 2015 in an early verison."/>
          <Speaker photo="RaineRevere" linkTo="raine" name="Raine Revere" position="Co-founder" company="Maiden"
            bio="Raine Revere is an engineer and educator in the Ethereum community who has spoken
            at blockchain events around the world. Raine is the Lead Architect of ShapeShift Prism
            and is the co-founder of Maiden, a company that delivers socially-aware blockchain
            education, cultural & leadership development, and diversity-powered blockchain
            consulting. As a therapist, teacher, and cryptocurrency engineer, Raine has the unique
            capacity to engage deeply with both the technical and social aspects of technology."/>
          <Speaker photo="AronFischer" linkTo="aron" name="Aron Fischer" position="Governance Researcher" company="Colony"
            bio="Aron Fischer received his PhD in mathematics from the City University of New York in 2015. He is working
            in the research arm of Colony: a platform for open organizations which seeks to enable new forms of
            decentralised organizations. The work involves a careful balancing of what is desirable
            in terms of governance and what is possible given the technical limitations of the Ethereum blockchain."/>
          <Speaker photo="MariaGomez" linkTo="maria" name="María Gómez" position="Ecosystem Development" company="Aragon One"
            bio="María Gómez is a former corporate lawyer. She worked several years in the M&A and corporate finance
            practice. Currently she works on ecosystem development for Aragon.one, one of the teams working for the
            Aragon project. "/>
          <Speaker photo="EvanVanNess" linkTo="evan" name="Evan Van Ness" position="Founder & Editor" company="Week in Ethereum News"
            bio="Evan Van Ness is the founder and editor of WeekInEthereum.com and a member of ConsenSys.
            As a Texan, decentralization is in his blood."/>
          <Speaker photo="JordiBaylina" linkTo="jordi" name="Jordi Baylina" position="Tech Lead" company="Iden3"
            bio="Jordi is one of the strongest Solidity developers in the world and a high impact contributor in the
            Ethereum community. He is a co-founder of the White Hat Group, which played a major role in rescuing funds
            from TheDAO and Parity Multisig Hacks, author of the MiniMe token contract, the elliptic curves Solidity
            library as well as numerous other established contracts in the Ethereum space. Well respected auditor,
            most notably leading teams to audit the MakerDAO Stable Coin system and Aragon project. Founder of the
            donation platform Giveth, DAppNode and Iden3."/>
          <Speaker photo="WillWarren" linkTo="will" name="Will Warren" position="Co-founder and CEO" company="0x"
            bio="Will Warren is Co-founder and CEO at 0x which is developing public infrastructure for peer-to-peer
            exchange on the Ethereum blockchain. After receiving a B.S. in Mechanical Engineering from UC San Diego,
            Will worked as a graduate research assistant at Los Alamos National Laboratory conducting applied physics
            research. Will spent two years in UC San Diego's Structural Engineering doctoral program before dropping
            out to pursue an interest in Ethereum full time."/>
          <Speaker photo="JouniHelminen" linkTo="jouni" name="Jouni Helminen" position="Head of Design" company="Aragon One"
            bio="Jouni has been designing interfaces and apps for web and mobile for over 16 years in Finland, London and Asia
            - in creative agencies, tech and finance. He has lately been focusing on open source projects aimed at large
            scale impact - Ubuntu Phone and Desktop, recent redesign of Riot.im and of course Aragon. He has been into Ethereum
            from the start, and with Aragon he is working on enabling new types of organisations and governance models to
            flourish."/>
          <Speaker photo="KennyRowe" linkTo="kenny" name="Kenny Rowe" position="Vice President" company="RChain Cooperative"
            bio="Kenny is an entrepreneur who brings a focus on governance, community building and collaboration to projects
            across the blockchain industry. Currently, he serves as Vice President of RChain Cooperative. Formerly he worked
            as head of operations at MakerDAO as well as a senior consultant at CoinFund. Kenny founded the Seattle Ethereum
            Meetup group and previously spent eight years working in e-commerce for Newell Brands in various management roles."/>
          <Speaker photo="LauraKalbag" linkTo="laura" name="Laura Kalbag" position="Author" company=" Accessibility for Everyone"
            bio="Laura Kalbag is a designer from the UK, and author of Accessibility For Everyone from A Book Apart. She’s co-founder
            of Ind.ie, a tiny two-person not-for-profit working for social justice in the digital networked age. At Ind.ie, Laura
            works on Better Blocker, a privacy tool that protects you from being tracked on the Web, and on initiatives to create
            a federated personal web where everyone owns and controls their own piece of the internet."/>
          <Speaker photo="MeltemDemirors" linkTo="maltem" name="Meltem Demirors" position="Chief Strategy Officer" company="CoinShares"
            bio="Meltem Demirors is Chief Strategy Officer of CoinShares, the leading digital asset manager, and a cryptocurrency
            investor, advisor, and advocate, with a unique blend of experience in both legacy & blockchain-based finance and
            cryptocurrencies. On the legacy finance front, Ms. Demirors worked with some of the largest companies in the world, mainly
            on financial risk management and capital efficiency. On the blockchain-based finance side, she has had an intense focus on
            portfolio management and network development, beginning in the early days of cryptocurrency ecosystem development."/>
          <Speaker photo="YaldaMousavinia" linkTo="yalda" name="Yalda Mousavinia" position="Co-founder" company="Space Cooperative"
            bio="Yalda Mousavinia is a co-founder Space Cooperative, a worker-owned aerospace cooperative, which is the original
            organization spearheading the establishment of Space Decentral, a DAO for creating a global space agency. Her and other
            members of the Space Decentral community were awarded an Aragon Nest grant to develop a Planning Suite for DAOs and she
            is the lead product manager and UX designer. Prior to Space Cooperative, Yalda designed solutions for Oracle's Enterprise
            Resource Planning cloud software suite. Her career as a product manager and designer for software companies spans over 10
            years."/>
          <Speaker photo="YondonFu" linkTo="yondon" name="Yondon Fu" position="Software Engineer & Researcher" company="Livepeer"
            bio="Yondon Fu is a software engineer and researcher at Livepeer which is developing public decentralized video streaming
            infrastructure that helps developers scale video enabled applications. Previously, he worked on decentralized funding
            mechanisms for sustainable open source software as a part of his senior undergraduate thesis."/>
        </Container>
        <p>More speakers coming soon</p>
      </SpeakersBox>
    </Section>
    <Section className="white">
      <TextContainer>
        <h2>Want to Speak at AraCon 2019?</h2>
        <p>If you would like to join a panel or do a talk at AraCon on anything related to governance, blockchain, future of work or borderless collaboration - please <Link to="/speakerapplication">apply here</Link> before November 10th.</p>
      </TextContainer>
    </Section>
  </Page>
);

export default Speakers
