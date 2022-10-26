import styled, { StyledProps } from "styled-components";

export const Title = styled.h1`
  color: gray;
  font-weight: 400;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 10px;
`;

export const Footer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-weight: 300;
  color: gray;
`;

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Main = styled.div`
  padding: 10px;
  height: 82vh;
  max-height: 82vh;
  font-size: ${(props: StyledProps<any>) => props.theme.color};
  overflow: hidden;
  scroll-behavior: smooth;
  overflow-y: auto;
`;
