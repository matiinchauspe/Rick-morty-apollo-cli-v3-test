import styled, { StyledProps } from "styled-components";

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex: 1;
`;

export const Row = styled.div``;

// col width = (row width / number of cols) * (flex value) => FORMULA
export const Col = styled.div`
  flex: ${(props: any) => props.size};
`;
