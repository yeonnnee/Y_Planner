import React from "react";
import styled from "styled-components";

import TasksInput from "../Tasks/TasksInput";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Date = styled.div`
  font-family: "Life Savers", cursive;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  margin-right: 5px;
  outline: none;
  border: 1px solid #30475e;
  background: none;
  cursor: pointer;
  font-family: "Life Savers", cursive;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;
const ListCon = styled.ul`
  width: 90%;
  margin: 10px 0;
  border: 1px solid #30475e;
  height: 150px;
  overflow-y: auto;
  overflow-x: hidden;
`;
const List = styled.li`
  width: 100%;
  margin: 10px;
`;
const DelBtn = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
    color: #5a2330;
  }
`;
const BtnContainer = styled.div`
  width: 100%;
  height: 30px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const AddMonthlyPresenter = (monthlyProps) => {
  const {
    onChange,
    onSubmit,
    save,
    date,
    cancel,
    planList,
    content,
    deleteItem,
  } = monthlyProps;

  return (
    <Container>
      <Date>{date.substring(0, 10)}</Date>
      <TasksInput
        onChange={onChange}
        onSubmit={onSubmit}
        content={content.text}
        error={content.error}
      />
      <ListCon>
        {planList.contents.map((content, index) => (
          <List key={index} id={content.id}>
            {content.text}
            <DelBtn onClick={deleteItem}>X</DelBtn>
          </List>
        ))}
      </ListCon>
      <BtnContainer>
        <Button onClick={save}>Save</Button>
        <Button onClick={cancel}>Cancel</Button>
      </BtnContainer>
    </Container>
  );
};

export default AddMonthlyPresenter;