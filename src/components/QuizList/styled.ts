import styled, { css } from "styled-components";
import colors from "../../shared/themes/colors";

export const List = styled.ul`
width: 100%;
margin: 0;
list-style: none;
padding: 2px;
`

export const Line = styled.li`
padding: 10px;
margin-bottom: 8px;
border-radius: 8px;
background-color: ${colors.lightGray};
`

export const checkboxStyles = css`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid ;
  appearance: none;
  outline: none;
  cursor: pointer;
  position: relative;

  &:checked {
    &.correct {
      background-color: green;
      &:after {
        content: '✓';
      }
      border: none;
    }
    &.incorrect {
      background-color: red;
      &:after {
        content: 'x';
      }
      border: none;
    }
    &:after {
      color: white;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
    }
  }
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  ${checkboxStyles}
  margin-right: 10px;
`;

