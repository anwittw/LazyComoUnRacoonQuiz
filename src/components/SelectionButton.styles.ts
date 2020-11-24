import styled from "styled-components";

type SelectionButtonProps = {
  isSelected: boolean;
};

export const Button = styled.button<SelectionButtonProps>`
  cursor: pointer;
  margin: 10px 10px;
  word-wrap: break-word;
  height: 40px;
  width: 40%;
  background: ${({ isSelected }) => {
    return isSelected
      ? "linear-gradient(180deg, #f2edef, #0b6864)"
      : "linear-gradient(180deg, #f2edef, #21ae53)";
  }};

  border: 2px solid #666c59;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  :focus {
    outline: none;
  }
`;
