import React from "react";
import he from "he";
import { Wrapper, AnswerButton } from "./QuestionCard.styles";

type QuestionCardProps = {
  game: any;
  handleUserAnswer: any;
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  game,
  handleUserAnswer,
}) => {
  const { number, totalQuestions, questions, scores, userAnswers } = game;

  const question = questions[number - 1];

  return (
    <Wrapper>
      <div className="qcard-header"></div>
      <p>
        Number {number} / {totalQuestions}
      </p>
      <p>Scores {scores}</p>
      <p className="qcard-question">{he.decode(question.question)}</p>
      <div className="qcard-ans-wrapper">
        {question.answers.map((answer: string, i: number) => (
          <div key={i}>
            <AnswerButton
              isAnswered={game.userAnswers.length === number}
              isCorrect={
                game.userAnswers.length === number &&
                answer === userAnswers[number - 1].correctAnswer
              }
              disabled={game.userAnswers.length === number ? true : false}
              key={i}
              value={answer}
              onClick={(e) =>
                handleUserAnswer(number - 1, e.currentTarget.value)
              }
            >
              {he.decode(answer)}
            </AnswerButton>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
