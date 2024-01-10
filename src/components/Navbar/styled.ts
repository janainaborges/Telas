import styled from "styled-components";


export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  align-items: center;
`;

export const Start = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.div`
  display: flex;
  padding-left: 10px;
  align-items: center;
  gap: 3px;
`;

export const Icon = styled.div<{ bg: any }>`
  background-image: url(${(props) => props.bg});
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-position: center;
`;
