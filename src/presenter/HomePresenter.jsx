import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import Header from "../components/WelcomeMessage";

const FadeIn = keyframes`
from{
  transform: translateY(-30px);
  opacity: 0;
} to{
  transform: translateY(0);
  opacity: 1;
  }
`;

const Container = styled.div`
  height: 60%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  animation: ${FadeIn} 1s linear;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
`;
const Button = styled.div`
  width: 150px;
  height: 40px;
  font-family: "Life Savers", cursive;
  border: 1px solid #30475e;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;
const SLink = styled(Link)`
  text-decoration: none;
  color: #382933;
`;

const Span = styled.span``;

const HomePresenter = () => {
  return (
    <Container>
      <Header />
      <Section>
        <Text>Already have an account?</Text>
        <SLink to="/logIn">
          <Button>Log In</Button>
        </SLink>
      </Section>
      <Span>or</Span>
      <Section>
        <Text>create your account</Text>
        <SLink to="/sign-up">
          <Button>Sign Up</Button>
        </SLink>
      </Section>
    </Container>
  );
};

export default HomePresenter;
