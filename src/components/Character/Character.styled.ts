import styled from "styled-components";
import { Link as RLink } from "react-router-dom";

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  color: #c5c5c5;
  margin: 5px 10px;
  /* border: 1px solid; */
  padding: 10px;
  height: 300px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  :hover {
    box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.2);
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

export const Name = styled.span`
  color: #059669;
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 180px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Species = styled.span`
  font-size: 15px;
  color: #fb7185;
  font-style: italic;
  font-weight: 300;
  margin-bottom: 10px;
`;

export const Link = styled(RLink)`
  color: #0891b2;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
`;
