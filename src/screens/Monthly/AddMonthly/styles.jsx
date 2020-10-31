import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  @media only screen and (max-width: 640px) {
    height: 430px;
    position: relative;
    top: -60px;
    margin: 0;
  }
`;

export const Date = styled.div`
  font-family: "Rajdhani", sans-serif;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  margin-right: 5px;
  outline: none;
  border: 1px solid #30475e;
  background: none;
  cursor: pointer;
  font-family: "Rajdhani", sans-serif;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;
export const ListCon = styled.ul`
  width: 90%;
  margin: 10px 0;
  border: 1px solid #30475e;
  height: 150px;
  background-color: #e8e8e8;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const List = styled.li`
  width: 100%;
  margin: 10px;
`;
export const DelBtn = styled.button`
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
export const Section = styled.div`
  width: 100%;
  height: 30px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ListSection = styled.div`
  width: 90%;
  margin: 10px 0;
  padding: 10px 20px 0 20px;
  background-color: #e8e8e8;
`;
