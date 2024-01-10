import styled from "styled-components";
import colors from "../../shared/themes/colors";
import title from "../../shared/themes/title";

export const StyledButton = styled.button<{ button: "S" | "N" }>`
  width: 100%;
  padding: 15px 20px;
  border: ${(props) =>
    props.button === "N" ? `1px solid ${colors.primary}` : "none"};
  border-radius: 8px;
  background-color: ${(props) =>
    props.button === "S" ? `${colors.primary}` : `${colors.light}`};
  color: ${(props) =>
    props.button === "N" ? `${colors.primary}` : `${colors.light}`};
  font-size: ${title.size.l};
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: default;
  }
`;
