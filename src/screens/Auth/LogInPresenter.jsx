import React from "react";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import Loader from "../../components/Loader";
import Header from "../../components/Header";
import ErrorMessage from "../../components/msg/ErrorMessage";
import { Button } from "../../components/Button";
import { Container, Frame, Main } from "../../components/styles/Templates";
import {
  PasswordLink,
  SignUpLink,
  Form,
  Input,
  Wrapper,
  Section,
  Label,
  Icon,
} from "./styles";

const LogInPresenter = (logInProps) => {
  const { onChange, onClick, state, user } = logInProps;
  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Wrapper>
            {state.isLoading ? <Loader /> : null}
            {user.error ? <ErrorMessage error={user.error} /> : null}

            <Form>
              <Label htmlFor="email">
                <Icon icon={faEnvelope} />
              </Label>
              <Input
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                onChange={onChange}
              />
            </Form>
            <Form>
              <Label htmlFor="pw">
                <Icon icon={faLock} />
              </Label>
              <Input
                autoComplete="off"
                type="password"
                placeholder="Password"
                name="password"
                onChange={onChange}
              />
            </Form>
            <PasswordLink to="/find-password">Forgot password?</PasswordLink>
          </Wrapper>
          <Section>
            <Button onClick={onClick} text="로그인" />
            <SignUpLink to="/sign-up">Create Y Planner Account</SignUpLink>
          </Section>
        </Main>
      </Frame>
    </Container>
  );
};

export default LogInPresenter;
