import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const SlideDown = keyframes`
  from {
    transform: translateY(-30px)
  } 
  to{
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  width: 100%;
  height: 150px;
  padding: 10px;
  display: none;
  &:hover {
    display: block;
  }
`;

const List = styled.li`
  width: 100%;
  height: 70px;
  border: 1px solid #30475e;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Rajdhani", sans-serif;
  font-size: 18px;
  background-color: #4b5d67;
  color: #c2b0ad;
  z-index: 1;
  &:hover {
    background-color: #374851;
  }
  &:focus {
    background-color: #374851;
  }
  &:focus ~ ${Section} {
    display: block;
    animation: ${SlideDown} 0.5s linear forwards;
    background-color: #e8e8e8;
  }
`;
const Header = styled.div`
  width: 100%;
  height: 20px;
  border-bottom: 1px solid grey;
  margin-bottom: 10px;
`;
const Title = styled.div``;
const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  overflow: hidden;
`;
const Scroll = styled.div`
  width: 110%;
  height: 60px;
  overflow: auto;
`;
const Detail = styled.ul`
  font-family: "Rajdhani", sans-serif;
`;
const Desc = styled.li`
  margin-left: 30px;
  list-style: square;
`;
const BtnSection = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

const EditLink = styled(Link)``;
const Btn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 20px;
  outline: none;
  border: 1px solid #30475e;
  margin-right: 10px;
  font-family: "Rajdhani", sans-serif;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;

const MonthlyList = (monthlyProps) => {
  const { date, contents, id, onDelete, onEdit } = monthlyProps;

  return (
    <Container>
      <List tabIndex="0">
        <Title>{date.substring(0, 10)}</Title>
      </List>
      <Section>
        <Detail>
          <Header>Description</Header>
          <Wrapper>
            <Scroll>
              {contents.map((content, index) => {
                return <Desc key={index}>{content.text}</Desc>;
              })}
            </Scroll>
          </Wrapper>
        </Detail>

        <BtnSection>
          <EditLink to={`/edit`}>
            <Btn onClick={onEdit} id={id}>
              Edit
            </Btn>
          </EditLink>
          <Btn onClick={onDelete} id={date}>
            Delete
          </Btn>
        </BtnSection>
      </Section>
    </Container>
  );
};

export default MonthlyList;
