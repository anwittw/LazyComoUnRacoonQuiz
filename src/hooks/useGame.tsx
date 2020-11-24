import { useState, useEffect } from "react";
import { Difficulty, Category, Question, fetchQuizQuestions } from "../API";

export type UserAnswer = {
  question: string;
  answers: string[];
  userAnswer: string;
  isCorrect: boolean;
  correctAnswer: string;
};

export type GameState = {
  number: number;
  totalQuestions: number;
  isLoading: boolean;
  isGameOver: boolean;
  questions: Question[];
  scores: number;
  userAnswers: UserAnswer[];
};

const useGame = () => {
  const [game, setGame] = useState<GameState>({
    number: 1,
    totalQuestions: 0,
    isLoading: false,
    isGameOver: true,
    questions: [],
    scores: 0,
    userAnswers: [],
  });

  useEffect(() => {
    if (game.userAnswers.length === game.totalQuestions) {
      setGame((prev) => ({ ...prev, isGameOver: true }));
    }
  }, [game.userAnswers]);

  function isLoading() {
    setGame((prev) => ({ ...prev, isLoading: true }));
  }

  function addScore() {
    setGame((prev) => ({ ...prev, scores: prev.scores + 1 }));
  }

  const startGame = async (
    numberOfQuestions: number | undefined,
    difficulty: Difficulty | undefined,
    category: Category | undefined
  ) => {
    isLoading();
    try {
      const questions = await fetchQuizQuestions(
        numberOfQuestions,
        difficulty,
        category
      );
      if (questions.length > 0) {
        setGame((prev) => ({
          ...prev,
          isLoading: false,
          isGameOver: false,
          questions,
          totalQuestions: questions.length,
        }));
      } else {
        alert("Not enough Questions available, try less or another category!");
        resetGame();
      }
    } catch (err) {
      alert("an error occured, try again");
      resetGame();
    }
  };

  const resetGame = () => {
    setGame({
      number: 1,
      totalQuestions: 0,
      isLoading: false,
      isGameOver: true,
      questions: [],
      scores: 0,
      userAnswers: [],
    });
  };

  const handleUserAnswer = (num: number, answer: string, key: number) => {
    if (game.questions[num].correct_answer === answer) {
      addScore();
    }
    setGame((prev) => ({
      ...prev,
      userAnswers: [
        ...game.userAnswers,
        {
          question: game.questions[num].question,
          answers: game.questions[num].answers,
          userAnswer: answer,
          isCorrect: game.questions[num].correct_answer === answer,
          correctAnswer: game.questions[num].correct_answer,
        },
      ],
    }));
  };

  const moveToNextQuestion = () => {
    setGame((prev) => ({
      ...prev,
      number: prev.number + 1,
    }));
  };

  return { game, startGame, resetGame, handleUserAnswer, moveToNextQuestion };
};

export default useGame;
