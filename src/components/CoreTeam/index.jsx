import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import LabelSection from "../LabelSection"
import coreCong from "../../assets/img/Team/coreCong.png"
import coreKobus from "../../assets/img/Team/coreKobus.png"
import coreLocke from "../../assets/img/Team/coreLocke.png"
import corePeter from "../../assets/img/Team/corePeter.png"
import coreRicardo from "../../assets/img/Team/coreRicardo.png"
import coreSang from "../../assets/img/Team/coreSang.png"
import coreTung from "../../assets/img/Team/coreTung.png"
import coreViet from "../../assets/img/Team/coreViet.png"
import mobileCoreCong from "../../assets/img/Team/mobileCoreCong.png"
import mobileCoreKobus from "../../assets/img/Team/mobileCoreKobus.png"
import mobileCoreLocke from "../../assets/img/Team/mobileCoreLocke.png"
import mobileCorePeter from "../../assets/img/Team/mobileCorePeter.png"
import mobileCoreRicardo from "../../assets/img/Team/mobileCoreRicardo.png"
import mobileCoreSang from "../../assets/img/Team/mobileCoreSang.png"
import mobileCoreTung from "../../assets/img/Team/mobileCoreTung.png"
import mobileCoreViet from "../../assets/img/Team/mobileCoreViet.png"
import AvatarItem from "../AvatarItem"
import team from "../../assets/img/Team/team.png"
import styled from "styled-components"

const StyledItemCol = styled(Col)`
  padding: 0 15px;
  @media screen and (max-width: 1660px) {
    padding: 0 4px;
  }
`
const StyledBlockCoreTeam = styled.div`
  width: 100%;
  background: url(${team}),
    transparent linear-gradient(128deg, #163f8c 0%, #8f65be 48%, #e740f0 100%)
      0% 0% no-repeat padding-box;
  background-repeat: no-repeat;
  background-position: right top;
  @media screen and (max-width: 991px) {
    background: transparent
      linear-gradient(128deg, #163f8c 0%, #8f65be 48%, #e740f0 100%) 0% 0%
      no-repeat padding-box;
    & span {
      margin-right: auto;
      margin-left: auto;
    }
    & .row:first-child div:first-child {
      min-height: 0;
      margin-left: 0;
      margin-top: 6px;
    }
  }
  @media screen and (max-width: 414px) {
    & span:first-child {
      font-size: 16px;
      line-height: 19px;
      font-weight: 700;
    }
    & span:last-child {
      font-size: 32px;
      line-height: 38px;
    }
  }
`
const StyledTeamRow = styled(Row)`
  @media screen and (max-width: 414px) {
    display: none;
  }
`
const StyledMobileTeamRow = styled(Row)`
  @media screen and (max-width: 414px) {
    display: flex;
  }
  @media screen and (min-width: 415px) {
    display: none;
  }
`

const StyledItemColMobile = styled.div`
  padding: 0px 6px 40px;
  width: 50%;
  margin-top: 28px;
`
const StyledItemImage = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 265px;
  border-radius: 8px;
`
const StyledItemName = styled.h5`
  font: normal normal bold 16px/19px Whyte;
  letter-spacing: 0px;
  color: #ffffff;
  text-shadow: 0px 3px 6px #00000029;
  margin-top: 12px;
`
const StyledItemJob = styled.span`
  font: normal normal normal 14px/20px Whyte !important;
  letter-spacing: 0px;
  min-height: 40px;
  color: #ffffff;
  display: inline-block;
  margin-top: 1px;
  width: 190px;
`
const StyledItemDesc = styled.p`
  font: normal normal normal 12px/16px Whyte;
  letter-spacing: 0px;
  color: #ededed;
  flex: 1;
  margin-top: 8px;
`
const CORE_TEAM = [
  {
    src: coreRicardo,
    name: "RICARDO FERREIRA",
    job: "CO-FOUNDER & TECHNICAL DIRECTOR",
    desc: "Bachelor of Commerce thought leader, with wide entrepreneurial and business development experience in real estate, manufacturing, information technology, fintech, and blockchain social media sectors.",
  },
  {
    src: corePeter,
    name: "PETER HJORTSOE",
    job: "CO-FOUNDER",
    desc: "M.Sc. International Business. Professional experience in real estate, FMCG, retail, renewable energy & finance. Serial entrepreneur, building and scaling businesses in Asia since 2014.",
  },
  {
    src: coreKobus,
    name: "KOBUS KOTZE",
    job: "CREATIVE LEAD",
    desc: "12 Years’ experience in broadcasting, branding, marketing, and strategy. Literary Theory and Writing graduate; currently a brand advisor to Bundesliga, Netflix, Discovery, and other major players.",
  },
  {
    src: coreLocke,
    name: "LOCKE KOSNOFF",
    job: "MARKETING SPECIALIST & BIZ DEV",
    desc: "BBA and PGCEi graduate, experienced in the fields of blockchain marketing, project management, communications, and advisory in various fintech start-ups.",
  },
  {
    src: coreCong,
    name: "CONG NGUYEN",
    job: "CEO - BLOCKCHAIN DEVELOPER ASIA",
    desc: "An experienced leader in modern technological innovation. Developed the DeFi For You platform and several ongoing blockchain projects for the Vietnamese government, banks, and local industries.",
  },
  {
    src: coreTung,
    name: "TUNG DUONG THANH",
    job: "DEV. LEAD - BLOCKCHAIN DEVELOPER ASIA",
    desc: "Project manager in multiple blockchain engineering teams, most recently, Travala and Defi For You. Tung is a leading-edge developer; constantly pushing the boundaries of modern technology.",
  },
  {
    src: coreViet,
    name: `VIET &nbsp;TUAN VU`,
    job: "VR GAME SPECIALIST",
    desc: "18 years’ experience in the fields of telecommunications and IT. More than 5 years involved in collaborating and providing AR/VR solutions to a wide range of industries.",
  },
  {
    src: coreSang,
    name: "SANG THE DUONG",
    job: "3D DESIGNER",
    desc: "More than 5 years’ experience designing for various AR/VR applications, ranging from games, simulation, travel, and education.",
  },
]

const MOBILE_CORE_TEAM = [
  {
    image: mobileCoreRicardo,
    name: "RICARDO FERREIRA",
    job: "CO-FOUNDER & TECHNICAL DIRECTOR",
    desc: "Bachelor of Commerce thought leader, with wide entrepreneurial and business development experience in real estate, manufacturing, information technology, fintech, and blockchain social media sectors.",
  },
  {
    image: mobileCorePeter,
    name: "PETER HJORTSOE",
    job: "CO-FOUNDER",
    desc: "M.Sc. International Business. Professional experience in real estate, FMCG, retail, renewable energy & finance. Serial entrepreneur, building and scaling businesses in Asia since 2014.",
  },
  {
    image: mobileCoreKobus,
    name: "KOBUS KOTZE",
    job: "CREATIVE LEAD",
    desc: "12 Years’ experience in broadcasting, branding, marketing, and strategy. Literary Theory and Writing graduate; currently a brand advisor to Bundesliga, Netflix, Discovery, and other major players.",
  },
  {
    image: mobileCoreLocke,
    name: "LOCKE KOSNOFF",
    job: "MARKETING SPECIALIST & BIZ DEV",
    desc: "BBA and PGCEi graduate, experienced in the fields of blockchain marketing, project management, communications, and advisory in various fintech start-ups.",
  },
  {
    image: mobileCoreCong,
    name: "CONG NGUYEN",
    job: "CEO - BLOCKCHAIN DEVELOPER ASIA",
    desc: "An experienced leader in modern technological innovation. Developed the DeFi For You platform and several ongoing blockchain projects for the Vietnamese government, banks, and local industries.",
  },
  {
    image: mobileCoreTung,
    name: "TUNG DUONG THANH",
    job: "DEV. LEAD - BLOCKCHAIN DEVELOPER ASIA",
    desc: "Project manager in multiple blockchain engineering teams, most recently, Travala and Defi For You. Tung is a leading-edge developer; constantly pushing the boundaries of modern technology.",
  },
  {
    image: mobileCoreViet,
    name: `VIET  TUAN VU`,
    job: "VR GAME SPECIALIST",
    desc: "18 years’ experience in the fields of telecommunications and IT. More than 5 years involved in collaborating and providing AR/VR solutions to a wide range of industries.",
  },
  {
    image: mobileCoreSang,
    name: "SANG THE DUONG",
    job: "3D DESIGNER",
    desc: "More than 5 years’ experience designing for various AR/VR applications, ranging from games, simulation, travel, and education.",
  },
]
const CoreTeam = () => {
  return (
    <StyledBlockCoreTeam>
      <Container>
        <Row>
          <LabelSection
            label="CORE TEAM"
            note="MEET &nbsp;THE"
            className="mt-120"
            before
          />
        </Row>
        <StyledTeamRow>
          {CORE_TEAM.map((item, idx) => (
            <StyledItemCol md={6} xxl={3} key={idx}>
              <AvatarItem item={item} />
            </StyledItemCol>
          ))}
        </StyledTeamRow>
        <StyledMobileTeamRow>
          {MOBILE_CORE_TEAM.map((item, idx) => (
            <StyledItemColMobile key={idx}>
              <StyledItemImage image={item.image} />
              <StyledItemName>{item.name}</StyledItemName>
              <StyledItemJob>{item.job}</StyledItemJob>
              <StyledItemDesc>{item.desc}</StyledItemDesc>
            </StyledItemColMobile>
          ))}
        </StyledMobileTeamRow>
      </Container>
    </StyledBlockCoreTeam>
  )
}

export default CoreTeam
