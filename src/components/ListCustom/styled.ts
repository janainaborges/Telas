import styled from "styled-components";

import iconStart from "../../assets/svg/star.svg";
import title from "../../shared/themes/title";
import colors from "../../shared/themes/colors";

export const Container = styled.main`
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 8px;
  height: 60px;
  align-items: center;
  background-color: ${colors.lightGray};
`;
export const Content = styled.div`
  display: flex;
`;
export const Icon = styled.img.attrs({
  src: `${iconStart}`,
})`
  width: 100%;
  height: 100%;
`;

export const CardImage = styled.div<{ bg: any }>`
  background-image: url(${(props) => props.bg});
  width: 30px;
  height: 30px;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BoxIcon = styled.div<{ border: boolean, color: string }>`
  width: 50px;
  height: 50px;
  display: flex;
  place-content: center;
  place-items: center;
  border-radius: ${(props) => props.border ? "8px": "50%"};
  background-color: ${(props) => props.color};
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  justify-content: space-between;
  padding: 4px;
`;

export const Start = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  padding-right: 15px;

  > span {
    padding-left: 8px;
  }
`;
