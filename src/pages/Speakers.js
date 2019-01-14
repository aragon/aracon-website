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
  max-width: 734px;
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
            bio="Jouni has been designing for web and mobile for over 16 years in Finland, London and Asia.  In addition to
            consulting in tech and finance, he has lately focused on open source - Ubuntu, redesign of Riot.im and of course
            Aragon. With Aragon his focus is designing the platform from human centred point of view - easy to use and accessible
            for anyone. Jouni is also working on Lorikeet - a design system for the decentralised web, used by Aragon and other
            leading Dapp projects. "/>
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
          <Speaker photo="MeltemDemirors" linkTo="meltem" name="Meltem Demirors" position="Chief Strategy Officer" company="CoinShares"
            bio="Meltem Demirors is Chief Strategy Officer of CoinShares, the leading digital asset manager, and a cryptocurrency investor,
            advisor, and advocate, with a unique blend of experience in both legacy & blockchain-based finance and cryptocurrencies.
            On the legacy finance front, Ms. Demirors worked with some of the largest companies in the world, mainly on financial
            risk management and capital efficiency. On the blockchain-based finance side, she has had an intense focus on portfolio
            management and network development. She invests in cryptocurrency and blockchain focused companies and projects via her
            invest firm, Shiny Pony Ventures and lectures at the MIT Media Lab and Oxford."/>
          <Speaker photo="YaldaMousavinia" linkTo="yalda" name="Yalda Mousavinia" position="Co-founder" company="Space Cooperative"
            bio="Yalda Mousavinia is a co-founder of Space Cooperative, a worker-owned aerospace cooperative, which is the original
            organization spearheading the establishment of Space Decentral, a DAO for creating a global space agency. She and other
            members of the Space Decentral community were awarded an Aragon Nest grant to develop a Planning Suite for DAOs and she
            is the lead product manager and UX designer. Prior to Space Cooperative, Yalda designed solutions for Oracle's Enterprise
            Resource Planning cloud software suite. Her career as a product manager and designer for software companies spans over 10
            years."/>
          <Speaker photo="YondonFu" linkTo="yondon" name="Yondon Fu" position="Software Engineer & Researcher" company="Livepeer"
            bio="Yondon Fu is a software engineer and researcher at Livepeer which is developing public decentralized video streaming
            infrastructure that helps developers scale video enabled applications. Previously, he worked on decentralized funding
            mechanisms for sustainable open source software as a part of his senior undergraduate thesis."/>
          <Speaker photo="AlisonBerreman" linkTo="Alison" name="Alison Berreman" position="Assistant Editor" company="ETHNews"
              bio="Alison Berreman is the assistant editor at ETHNews. She has a background in social work, and a master’s in
              rhetoric and composition studies from the University of Wyoming. "/>
          <Speaker photo="ChristophJentzsch" linkTo="Christoph" name="Christoph Jentzsch" position="Co-founder & CEO" company="Slock.it"
            bio="Christoph’s background is in theoretical physics, where he developed optimized software solutions for high performance
            computing on specialized hardware. Christoph has been part of the Ethereum project since 2014 as Lead Tester, securing and
            shaping the core protocol while working on the backend of the C++ client. End of 2015 he co-founded Slock.it, working on the
            decentralized sharing economy through the connection of Blockchain and IoT as well as TheDAO."/>
          <Speaker photo="JacobArluck" linkTo="Jacob" name="Jacob Arluck" position="Researcher" company="Tezos"
              bio="Jacob works on governance research for Tezos. He is most interested in improving blockchain governance to
              facilitate coordination and acquire the scalability necessary for widespread adoption."/>
          <Speaker photo="SamerHassan" linkTo="Samer" name="Samer Hassan" position="Researcher and Faculty Associate" company="Berkman Klein Center for Internet & Society"
              bio="Samer Hassan is an activist and researcher, Faculty Associate at the Berkman Klein Center for Internet & Society
              (Harvard University) and Associate Professor at the Universidad Complutense de Madrid (Spain). Focused on decentralized
              collaboration, he was awarded with a 1.5M€ ERC grant, the largest individual research grant in the EU, to build blockchain-based,
              democratic and economically sustainable organizations for the collaborative economy (the 'P2P Models' project)"/>
          <Speaker photo="StefanoBernardi" linkTo="Stefano" name="Stefano Bernardi" position="Director" company="Aragon Association"
              bio="Stefano has been interested in the crypto and decentralized organizations space since 2011. He is also a co-founder
              and venture partner at Semantic Ventures, an early stage European venture fund focusing on decentralized computing.In his spare
              time, he writes Token Economy, a leading crypto newsletter and organizes Unplug.vc retreats, bringing people to the
              mountains where he lives with his wife and two children."/>
          <Speaker photo="TaylorMonahan" linkTo="Monahan" name="Taylor Monahan" position="Founder & CEO" company="MyCrypto"
              bio="Taylor Monahan is the founder & CEO of MyCrypto, an open-source, non-custodial wallet solution. Previously
              she founded MyEtherWallet. She is dedicated to making the blockchain safer and easier to access for everyone."/>
          <Speaker photo="JorgeIzquierdo" linkTo="Jorge" name="Jorge Izquierdo" position="CTO" company="Aragon One"
              bio="Jorge is a co-founder of the Aragon Project and currently is the CTO of Aragon One, mostly focused on
              technology research. Before Aragon, Jorge was a mobile app developer and a tinkerer with any interesting
              tech he would learn of."/>
          <Speaker photo="AdamStallard" linkTo="adamSt" name="Adam Stallard" position="Co-founder" company="BrightID"
              bio="Adam Stallard created BrightID to bring the benefits of being verified as a unique person
              to everyone. Thanks to support from Giveth and Aragon, he was able to leave his job of eight years
              as a distributed systems programmer working on the largest land real-estate marketplace to focus on
              BrightID full-time. Adam is at home on Seattle's east side and easily found in the BrightID telegram
              group."/>
          <Speaker photo="AdanSanchezDePedroCrespo" linkTo="adan" name="Adán Sánchez de Pedro Crespo" position="Tech Lead" company="Witnet"
              bio="Tech Lead at @Witnet_io, CTO at @StamperyCo, founder of @LoquiIM, lecturer, cypherpunk, skeptic and pragmatist."/>
          <Speaker photo="Bingen" linkTo="bingen" name="Bingen Eguzkitza" position="Solidity developer" company="Aragon One"
              bio="Open source software and hardware lover, long time Linux user, with a background in Mathematics
              and Philosophy, abducted now by blockchain trying to find certainty and the opportunity we missed for
              decentralization with the old internet of open protocols."/>
          <Speaker photo="EduardoAntunaDiez" linkTo="eduardo" name="Eduardo Antuña Diez" position="Co-founder & Project Lead" company="DAppNode"
              bio="Eduardo is an Ethereum DevOps and Solidity developer with an established history in software
              engineering during the last ten years. He has been involved with various projects including Swarm City,
              Giveth and audits for MakerDAO Stable Coin system. Currently his focus on the development of DAppNode:
              The goal of which is to achieve “real decentralization” by creating a layer of personally owned hardware
              infrastructure that’s easy to set up and maintain, as well as providing secure access to the decentralized web."/>
          <Speaker photo="JeffEmmett" linkTo="jeffe" name="Jeff Emmett" position="Researcher" company="Giveth & Aragon DAC"
              bio="Jeff is a researcher of cryptoeconomic primitives, such as Token Curated Registries and
              Bonding Curves.  Working with Giveth and the Aragon DAC teams, he is helping to rethink the structure of charity
              in a decentralized world, and to forward the practice of Token Engineering for robust blockchain ecosystems.
              Jeff graduated from the University of Waterloo in Electrical Engineering, and is the author of the post 'Rewriting
              the Story of Human Collaboration'."/>
          <Speaker photo="JennaZenk" linkTo="jennaz" name="Jenna Zenk" position="CTO" company="Melonport"
              bio="Jenna is a software engineer with a background in financial markets and experience in asset management.
              She graduated from ESCP Europe in Paris, with a Master in Management and Financial Engineering. Prior to joining
              Melonport, she worked in the hedge fund industry, both in Paris and New York. Her early involvement in the Ethereum
              ecosystem and passion for decentralization and crypto-economics got her into programming. With both financial and
              technical knowledge, Jenna is devoted to build Melon as the new standard in asset management."/>
          <Speaker photo="JeremyMacaluso" linkTo="jeremym" name="Jeremy Macaluso" position="Software Engineer" company="Aragon DAC"
              bio="Jeremy is a software engineer who has been working for the Aragon DAC. He has focused on using Smart Organizations
              as personal accounts, and interacting with outside applications using Smart Organizations."/>
          <Speaker photo="JohnLight" linkTo="johnl" name="John Light" position="Community" company="Aragon One"
              bio="John Light works on the Community team at Aragon One, a company that is building tools for the
              governance of organizations and open source projects. He is also a co-founder of Bitseed, author of Bitcoin:
              Be Your Own Bank, free software advocate and contributor, and advisor to cryptocurrency startups and investors.
              John has helped organize many crypto-community events including EIP0 Summit in 2018, the Decentralized Web Summit
              in 2018 and 2016, and Blockstack Summit NYC in 2015. He also hosted the P2P Connects Us podcast, founded the Buttonwood
              SF cryptocurrency trading meetup in San Francisco, and is an avid reader and writer on the topics of peer-to-peer technology,
              philosophy, and culture."/>
          <Speaker photo="MoisesRendon" linkTo="moises" name="Moises Rendon" position="Associate Director & Associate Fellow" company="Center for Strategic and International Studies (CSIS)"
              bio="Moises is an associate director and associate fellow at the Center for Strategic & International Studies (CSIS),
              a think tank based in Washington D.C. Moises provides analysis and research on a range of public policy issues in Latin
              America, including on humanitarian aid response, governance and transparency, blockchain technology and innovation for
              social impact, and U.S. foreign policy toward Latin America, with particular emphasis on Venezuela, his native country."/>
          <Speaker photo="OlivierSarrouy" linkTo="olivers" name="Olivier Sarrouy" position="Co-founder & Dev lead" company="PandoNetwork"
              bio="Olivier has a Master degree in Computer Sciences from Centrale/Supélec. After graduatıng he worked on various
              open source projects before begınnıng a Ph.D ın philosophy. In 2015, he defended hıs Ph.D thesis in Communication
              Sciences on web-based decentralized organizations. He then worked as a Professor at University of Rennes 2 for
              three years discussing the economical, sociological and philosophical implications of distributed organizations
              and blockchain technologies. He has now resigned from academıa to work full time on the blockchain projects he leads."/>
          <Speaker photo="SebastianBolanos" linkTo="sebastianb" name="Sebastian Bolaños" position="Web3 developer" company="Althea"
              bio="Sebastian Bolaños is a web3 developer,  organizer of Ethereum meetups,
              deployer of Aragon DAOs, and builder of Aragon dapps at Althea.org."/>
          <Speaker photo="ThibauldFavre" linkTo="thibauld" name="Thibauld Favre" position="CEO & co-founder" company="Fairmint"
              bio="Thibauld is the CEO of Fairmint and author of the Continuous Organization whitepaper, an idea he started exploring
              after deep diving into TCRs, bonding curves and combining it through his entrepreneurial experience. Prior to Fairmint,
              Thibauld co-initiated LaPrimaire.org, a non-profit initiative aimed at transparently & democratically crowdsourcing
              the best candidates for the past french 2017 presidential election which gathered 150.000 citizens. Previously, Thibauld
              co-founded and led Allmyapps, the 1st App Store for PC, which he sold in 2014. Thibauld holds a masters degree in
              Computer Science and and a masters degree in Corporate Finance."/>
          <Speaker photo="BrettSun" linkTo="brett" name="Brett Sun" position="Lead developer" company="Aragon One"
              bio="A full-stack developer who loves to get his hands dirty, Brett spends his time and energy ensuring Aragon
              becomes not just a dream in our minds, but an impactful reality we can all play a part in."/>
          <Speaker photo="MonicaZeng" linkTo="monica" name="Monica Zeng" position="HR" company="Aragon One"
              bio="Monica is the founder of human.sh, a people management and coaching agency focused on crypto that works
              with top projects like Aragon, and Zeppelin. She’s a dropout and she has worked and lived in Barcelona and
              Silicon Valley prior to moving to the Crypto Valley in Zug, Switzerland. Her background is a mix of
              international expansion marketing, startup management, and strategy, and when not working she enjoys painting,
              techno and reading about human psychology."/>
          <Speaker photo="PrestonVanLoon" linkTo="preston" name="Preston Van Loon" position="Co-founder" company="Prysmatic Labs"
              bio="Preston is a co-founder at Prysmatic Labs, an independent team of blockchain engineers building the next
              iteration of Ethereum. He works with Ethereum researchers and open source developers to build a bleeding edge
              Ethereum 2.0 client supporting Sharding and Proof-of-Stake protocols."/>
          <Speaker photo="MathewCormier" linkTo="mathewc" name="Mathew Cormier" position="Project Lead" company="Espresso"
              bio="Mathew is a software engineer from Quebec City, Canada. He is currently project lead at Espresso and a regular
              contributor on many open source projects. Before joining the Aragon Nest umbrella in August 2018, Mathew has worked
              for almost a decade on the development of workflow management systems."/>
          <Speaker photo="BeltranBerrocal" linkTo="beltran" name="Beltran Berrocal" position="Co-founder" company="Decentralized Design Lab + UX @ ENS"
              bio="Beltran is a 360º designer, developer, educator, entrepreneur. He's the author of the Web3 Design Principles
              and proponent of the Web3 Design System, a series of guidelines and a library of components that implement the best
              UX practices for the space. He's also the UX designer at the Ethereum Name Service (ENS) and collaborated to solve
              part of the downfall of the DAO writing a deterministic parser for the Ethereum Blockchain. In previous lives Beltran
              co-founded and produced interactive products and an Art Foundation that exhibits 'Art for Hackers'"/>
          <Speaker photo="RouvenHeck" linkTo="rouven" name="Rouven Heck" position="Co-Founder" company="uPort at ConsenSys"
              bio="Rouven Heck is Co-Founder for the Digital Identity Platform (uPort) at ConsenSys and founding member of
              the Decentralized Identity Foundation. Rouven has a computer science background and over 15 years experience in
              banking IT, having worked for Deutsche Bank in various IT project, architecture and strategy roles in Germany,
              Hong Kong and New York before joining ConsenSys early 2016."/>
          <Speaker photo="MedhaKothari" linkTo="medha" name="Medha Kothari" position="Co-Founder and Executive Director" company="she256"
              bio="Medha Kothari is a Co-Founder and Executive Director of she256, a non profit which aims to increase diversity and break
              down barriers of entry in the blockchain space. She believes in exposure, education, and equitable opportunities. Medha is a
              developer by trade, and uses those skills to lead the consulting arm of Blockchain @ Berkeley, where she manages a team of
              developers and business consultants to build out full-stack blockchain solutions for large enterprise clients."/>
          <Speaker photo="LukeDuncan" linkTo="luked" name="Luke Duncan" position="Researcher" company="Aragon One"
              bio="Luke Duncan is a researcher working on the Aragon Project at A1. His primary focus is on governance processes and mechanisms
              which serve to align the interests of participants in blockchain-native organizations. He is also a passionate advocate for open
              source software sustainability and has recently proposed an alternative to traditional copyleft and permissive style licenses. "/>
          <Speaker photo="JordanMuir" linkTo="jordanm" name="Jordan Muir" position="Founder" company="Frame"
              bio="Jordan is the creator of Frame, an OS-level Ethereum interface working to make Ethereum approachable and accessible.
              As an NYC-based engineer and designer, he’s driven by projects that contribute to the acceleration of human innovation and
              believes open decentralized networks are an important step. He’s excited to be working on Frame alongside Aragon as part of
              the Nest program."/>
          <Speaker photo="TodorKolev" linkTo="todork" name="Todor Kolev" position="Founder" company="Comrade Cooperative"
              bio="Technologist and entrepreneur with over two decades of experience as software engineer and architect, currently
              applying AI and blockchain technologies in disruptive business models. Besides technology, in the last 10 years,
              Todor is dedicated to building human-centric companies around democratic values. He is the founder and Chairman of
              the Comrade Cooperative, a member-owned organization of software developers and innovation builders, that is based
              on transparency, technocracy, and self-governance."/>
          <Speaker photo="DanielShavit" linkTo="daniels" name="Daniel Shavit" position="Research lead" company="Pando"
              bio="Daniel is the research lead at Pando and DAOIncubator with a focus on decentralized governance and crypto-economics.
              Political Tech after payments and digital advisory for Paypal, Mastercard, Unicredit, Banca D’Italia."/>
        </Container>
        <p>More speakers coming soon</p>
      </SpeakersBox>
    </Section>
    <Section className="white">
      <TextContainer>
        <h2>Speaker applications are now closed</h2>
        <p>Thanks to everyone who applied to speak at AraCon 2019. We are now reviewing all submissions. If you are selected to speak you will be notified by November 19th 2018.</p>
      </TextContainer>
    </Section>
  </Page>
);

export default Speakers
