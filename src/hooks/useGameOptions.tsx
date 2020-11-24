import { useState, useEffect } from "react";
import { Difficulty, Category } from "../API";

type GameOptions = {
  questionAmount: number | undefined;
  category: Category | undefined;
  difficulty: Difficulty | undefined;
};

const useGame = () => {
  const [gameOptions, setGameOptions] = useState<GameOptions>({
    questionAmount: undefined,
    category: undefined,
    difficulty: undefined,
  });

  const [readyToPlay, setReadyToPlay] = useState(false);

  useEffect(() => {
    checkReadyToPlay();
  }, [gameOptions]);

  function checkReadyToPlay() {
    if (
      gameOptions.category !== undefined &&
      gameOptions.difficulty !== undefined &&
      gameOptions.questionAmount !== undefined
    ) {
      setReadyToPlay((prev) => true);
    }
  }

  const setDifficulty = (e: React.MouseEvent<HTMLButtonElement>) => {
    const difficulty = e.currentTarget.value;
    const difficultyEnum = difficulty as Difficulty;
    setGameOptions((prev) => ({ ...prev, difficulty: difficultyEnum }));
  };

  const setCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    const category = e.currentTarget.value;
    const categoryEnum = category as Category;
    setGameOptions((prev) => ({ ...prev, category: categoryEnum }));
  };

  const setQuestionAmount = (questionAmount: number) => {
    setGameOptions((prev) => ({ ...prev, questionAmount }));
  };
  return {
    gameOptions,
    setDifficulty,
    setCategory,
    setQuestionAmount,
    readyToPlay,
  };
};

export default useGame;
