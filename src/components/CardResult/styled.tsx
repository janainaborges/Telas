import styled from "styled-components";

import maskicon from "../../assets/Mask.png";
import colors from "../../shared/themes/colors";
import title from "../../shared/themes/title";

export const Container = styled.main`
  position: relative;
  width: 100%;
  height: 15vmax;
`;
export const Case = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Content = styled.img.attrs({
  src: `${maskicon}`,
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
export const Circular = styled.div`
  max-width: 13vmax;
`;
export const Box = styled.div`
  width: 50%;
  height: 100%;
  top: 0;
  right: 10px;
  display: flex;
  place-content: center;
  flex-direction: column;
`;

export const Description = styled.span`
  font-size: ${title.size.s}px;
  color: ${colors.secondary};
`;
