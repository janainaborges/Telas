import styled from "styled-components";
import colors from "../../shared/themes/colors";
import { ProgressBarI } from "../../types/progressBar.types";

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 10px;
  background-color: #eee;
  overflow: hidden;
`;

export const Progress = styled.div<ProgressBarI>`
  height: 100%;
  width: ${(props) => props.percentage}%;
  background-color: ${(props) =>
    props.color ? props.color : `${colors.primary}`};
  border-radius: 10px;
  transition: width 0.3s ease-in-out;
`;
