import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 50px;
  margin-top: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  color: gray;
  margin-right: 5px;
  border-width: 1px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #0891b2;
  color: white;
  font-weight: 300;
  border-radius: 5px;
  cursor: pointer;
  border-width: 0;
  :hover,
  :focus {
    background-color: #0e7490;
    transition: all 2s ease;
  }
`;
