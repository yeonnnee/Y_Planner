import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 460px;
  height: 480px;
  overflow: hidden;
  margin-left: 20px;
  margin-top: 20px;
`;
export const Scroll = styled.div`
  width: 480px;
  height: 490px;
  overflow: auto;
`;
export const List = styled.ul`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ListItem = styled.li`
  width: 400px;
  height: 60px;
  font-family: "Jaldi", sans-serif;
  letter-spacing: 1.5px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 13px;
  margin-bottom: 20px;
  background-color: #f5f0f0;
  box-shadow: 5px 5px 15px #c9c4c2, 5px 5px 10px #c9c4c2,
    inset -1px -1px 5px #baa7a1;
  &:hover {
    background-color: #e9e3e3;
  }
`;
export const Button = styled.button`
  font-family: "Jaldi", sans-serif;
  width: 100px;
  height: 30px;
  border-radius: 3px;
  margin-top: 25px;
  outline: none;
  border: none;
  background-color: rgb(65, 25, 25);
  color: wheat;
  letter-spacing: 1.5px;
  cursor: pointer;
`;
export const Title = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;
export const Header = styled.div`
  font-size: 15px;
`;
export const Icon = styled(FontAwesomeIcon)`
  color: rgb(182, 29, 29);
  cursor: pointer;
`;
export const Column = styled.div`
  margin: 0 20px;
`;
export const Status = styled.span`
  font-size: 11px;
  opacity: 0.6;
`;
export const Section = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: Center;
  justify-content: space-between;
  font-family: "Jaldi", sans-serif;
  font-weight: bold;
  letter-spacing: 1.5px;
`;
export const Filter = styled.div`
  font-size: 13px;
  color: rgb(182, 29, 29);
`;
export const Select = styled.select`
  margin-left: 5px;
  border: 1px solid white;
  background-color: transparent;
  outline: none;
  font-size: 13px;
  color: rgb(182, 29, 29);
  font-family: "Jaldi", sans-serif;
  font-weight: bold;
  letter-spacing: 1.5px;
`;
export const Option = styled.option`
  background-color: rgb(65, 25, 25);
  color: wheat;
`;