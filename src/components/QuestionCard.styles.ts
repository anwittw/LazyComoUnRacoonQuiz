import styled from "styled-components";

type AnswerButtonProps = {
  isCorrect: boolean;
  isAnswered: boolean;
};

export const Wrapper = styled.div`
  border-radius: 10px;
  max-width: 600px;
  background-color: #f2edef;
  padding: 20px;
`;

export const AnswerButton = styled.button<AnswerButtonProps>`
  cursor: pointer;
  margin: 10px 10px;
  word-wrap: break-word;
  height: 40px;
  width: 90%;
  background: ${({ isCorrect, isAnswered }) => {
    if (!isAnswered) {
      return "linear-gradient(180deg, #f2edef, #21ae53)";
    } else if (isAnswered && isCorrect) {
      return "linear-gradient(180deg, #f2edef, #0b6864)";
    } else {
      return "linear-gradient(180deg, #f2edef, red)";
    }
  }};
  border: 2px solid #666c59;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  :focus {
    outline: none;
  }
`;
