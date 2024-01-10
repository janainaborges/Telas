import styled from "styled-components";
import colors from "../../shared/themes/colors";
export const StyledAvatar = styled.div<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DefaultAvatarBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.gray};
`;
