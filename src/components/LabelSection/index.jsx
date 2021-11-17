import React from "react"
import styled from "styled-components"
const StyledLabelSection = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 67px;
  min-height: 179px;
  margin-left: 20px;
  letter-spacing: 0px;
  color: #ffffff;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  &.mt-120 {
    margin-top: 120px;
  }
  &.mt-75 {
    margin-top: 75px;
  }
  & span {
    margin-right: auto;
    margin-bottom: auto;
    margin-top: 0;
  }
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: -8px;
    width: 44px;
    height: 179px;
    background: transparent linear-gradient(180deg, #163f8c 0%, #9e08a6 100%) 0%
      0% no-repeat padding-box;
    z-index: -1;
    display: ${(props) => props.before && "none"};
  }
  & .note {
    font: normal normal normal 16px/21px Whyte;
    letter-spacing: 0px;
    color: #ffffff;
    margin-bottom: 16px;
    margin-top: 30px;
  }
`
const LabelSection = ({ label, note, className, before, topAuto }) => {
  console.log(topAuto)
  return (
    <StyledLabelSection className={className} before={before}>
      {note && <span className="note">{note}</span>}
      <span top={topAuto} className={topAuto}>
        {label}
      </span>
    </StyledLabelSection>
  )
}

export default LabelSection