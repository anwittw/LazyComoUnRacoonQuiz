import React from "react";
import FinalScoreCard from "./components/FinalScoreCard";
import PrepareGameCard from "./components/PrepareGameCard";
import QuestionCard from "./components/QuestionCard";
import useGame from "./hooks/useGame";
import useGameOptions from "./hooks/useGameOptions";
import { Button, GlobalStyle, Wrapper, ButtonWrapper } from "./App.styles";

function App() {
  const {
    game,
    startGame,
    handleUserAnswer,
    moveToNextQuestion,
    resetGame,
  } = useGame();
  const { gameOptions, readyToPlay, ...optionSetter } = useGameOptions();
  const { isLoading, isGameOver, userAnswers, number } = game;

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {isGameOver && userAnswers.length === 0 && (
          <PrepareGameCard callbacks={optionSetter} gameOptions={gameOptions} />
        )}
        {!isLoading && !isGameOver && (
          <QuestionCard game={game} handleUserAnswer={handleUserAnswer} />
        )}
        {isLoading && <p>LOADING</p>}
        {!isLoading && isGameOver && userAnswers.length === 0 && (
          <ButtonWrapper>
            <Button
              disabled={!readyToPlay ? true : false}
              onClick={() =>
                startGame(
                  gameOptions.questionAmount,
                  gameOptions.difficulty,
                  gameOptions.category
                )
              }
            >
              Start Game
            </Button>
          </ButtonWrapper>
        )}
        {!isGameOver && game.userAnswers.length < game.totalQuestions && (
          <ButtonWrapper>
            <Button
              disabled={userAnswers.length === number ? false : true}
              onClick={moveToNextQuestion}
            >
              Next Question
            </Button>
          </ButtonWrapper>
        )}
        {isGameOver && userAnswers.length > 0 && (
          <FinalScoreCard scores={game.scores} resetGame={resetGame} />
        )}
      </Wrapper>
    </>
  );
}

export default App;
