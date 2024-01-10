import styled from "styled-components";
import title from "./title";
import colors from "./colors";

export const H1 = styled.h1`
  font-size: ${title.size.m}px;
  font-weight: ${title.bold.l};
  color: ${colors.dark};
`;

export const H2 = styled.h1`
  font-size: ${title.size.m}px;
  font-weight: ${title.bold.s};
  color: ${colors.secondary};
`;

export const Line = styled.h1`
  width: 100%;
  padding: 20px 0;
  color: ${colors.secondary};
  font-size: ${title.size.m}px;
  font-weight: ${title.bold.m};
  padding-top: 10px;
`;

export const LineMedium = styled.h1`
  color: ${colors.dark};
  font-size: ${title.size.m}px;
  font-weight: ${title.bold.m};
`;

export const Span = styled.span`
  font-size: ${title.size.ss}px;
  font-weight: ${title.bold.s};
  color: ${colors.secondary};
`;
