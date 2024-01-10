import styled from "styled-components";
import colors from "../../shared/themes/colors";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ButtonContent = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  background-color: ${colors.gray};

  &:focus {
    outline: none;
    border-color: blue;
  }
`;
