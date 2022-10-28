import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 40px;
  margin-top: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: gray;
  margin-right: 0px;
  border: #0891b2 1px solid;
  :focus {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-width: 1;
    outline-color: #0891b2;
    outline-width: 0;
    background-color: lightgray;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #0891b2;
  color: white;
  font-weight: 300;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  border-width: 0;
  :hover,
  :focus {
    background-color: #0e7490;
    transition: all 2s ease;
  }
`;
