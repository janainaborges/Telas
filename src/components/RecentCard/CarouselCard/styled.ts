import styled from "styled-components";
import colors from "../../../shared/themes/colors";

export const CardContainer = styled.div`
  width: 150px;
  height: 150px;
  padding: 16px;
  border-radius: 8px;
  margin: 0 1rem;
  background-color: ${colors.lightGray};
`;

export const CardImage = styled.div<{ bg: any }>`
  background-image: url(${(props) => props.bg});
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
`;

export const BoxIcon = styled.div`
  width: 35px;
  height: 35px;
  background-color: ${colors.light};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.div`
  padding-top: 8px;
`;
