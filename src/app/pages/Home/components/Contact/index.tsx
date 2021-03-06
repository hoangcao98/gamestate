import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import girl from 'app/assets/img/Contact/girl.png';
import ContactForm from './ContactForm';

const StyledContainerContact = styled(Container)`
  @media screen and (min-width: 1200px) {
    max-width: 94%;
  }
  @media screen and (min-width: 2440px) {
    max-width: 1820px;
  }
`;
const StyledBlockContact = styled(Row)`
  display: flex;
  background: transparent linear-gradient(180deg, #163f8c 0%, #9e08a6 100%) 0%
    0% no-repeat padding-box;
  position: relative;
  border-radius: 34px;
  @media screen and (max-width: 991px) {
    border-radius: 0;
  }
  &:before {
    content: '';
    position: absolute;
    top: -16px;
    right: -28px;
    left: -9px;
    height: 40px;
    -webkit-filter: blur(24px);
    filter: blur(23 px);
    background: #000;
    z-index: 1;
    @media screen and (max-width: 414px) {
      z-index: -1;
    }
  }
`;
const StyledImageContact = styled(Col)`
  min-height: 702px;
  background-image: url(${girl});
  background-size: cover;
  /* background-position: center center; */
  background-position: 30%center;
  border-top-left-radius: 34px;
  border-bottom-left-radius: 34px;
  @media screen and (max-width: 991px) {
    border-radius: 0;
  }
  @media screen and (max-width: 768px) {
    min-height: 560px;
  }
`;
const StyledBlockForm = styled(Col)`
  background: transparent linear-gradient(180deg, #163f8c 0%, #9e08a6 100%) 0%
    0% no-repeat padding-box;
  padding: 50px 84px 52px 90px;
  position: relative;
  z-index: 1;

  border-top-right-radius: 34px;
  border-bottom-right-radius: 34px;
  /* z-index: 300; */

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -40px;
    background: transparent linear-gradient(180deg, #163f8c 0%, #9e08a6 100%) 0%
      0% no-repeat padding-box;
    opacity: 0.91;
    filter: blur(16px);
    -o-filter: blur(16px);
    -webkit-filter: blur(16px);
    -moz-filter: blur(16px);
    -ms-filter: blur(16px);
    width: 100px;
    height: 100%;
  }
  @media screen and (max-width: 1399px) {
    padding: 40px 40px 40px 50px;
  }
  @media screen and (max-width: 991px) {
    padding: 20px 20px 40px 20px;
    border-radius: 0;
    z-index: 1;
    &:before {
      width: 100%;
      height: 1px;
      top: -1px;
      left: 0;
      right: 0;
      /* -webkit-filter: unset; */
      filter: unset;
      z-index: 3;
      box-shadow: 0px -4px 18px 20px #163f8c;
    }
  }
`;
const Contact = () => {
  return (
    <StyledContainerContact fluid="xl" id="contact-form">
      <StyledBlockContact>
        <StyledImageContact md={12} lg={6} />
        <StyledBlockForm md={12} lg={6}>
          <ContactForm />
        </StyledBlockForm>
      </StyledBlockContact>
    </StyledContainerContact>
  );
};

export default Contact;
