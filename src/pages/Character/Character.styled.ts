import styled from "styled-components";
import { Link as RLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 30px 10px;
  margin: 10px 30px;
`;

export const Image = styled.img`
  width: 450px;
  border-radius: 10px;
  height: 300px;
  object-fit: cover;
`;

export const Title = styled.h1`
  color: #059669;
  margin-bottom: 15px;
  font-weight: bold;
`;

export const Link = styled(RLink)`
  color: #0891b2;
  font-weight: bold;
  font-size: 16px;
  margin: 0 30px;
  text-decoration: none;
`;

export const Text = styled.span<any>`
  color: ${(props) => props.color || "gray"};
  font-size: ${(props: any) => props.size || "17px"};
  font-style: ${(props: any) => (props.cursive ? "italic" : "normal")};
  font-weight: 300;
  margin-bottom: 10px;
`;

export const Summary = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 20px 200px;
`;

export const Centered = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;
