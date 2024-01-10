import styled from "styled-components";
import title from "../../shared/themes/title";
import colors from "../../shared/themes/colors";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 12px;
  width: 100%;
  > li {
    padding: 15px;
    font-size: ${title.size.m}px;
    font-weight: ${title.bold.s};
    color: ${colors.secondary};
  }
`;
export const Title = styled.div`
padding: 20px 0;
`