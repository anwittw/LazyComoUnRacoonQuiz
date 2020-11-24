import React from "react";
import { Difficulty, Category } from "../API";
import RangeSlider from "./RangeSlider";
import SelectionButton from "./SelectionButton";
import {
  DifficultyWrapper,
  CategoryWrapper,
  Wrapper,
} from "./PrepareGameCard.styles";
type PrepareGameProps = {
  callbacks: any;
  gameOptions: any;
};

const PrepareGameCard: React.FC<PrepareGameProps> = ({
  callbacks,
  gameOptions,
}) => {
  const difficultyOptions = Object.entries(Difficulty);
  const categoryOptions = Object.entries(Category);
  const { setDifficulty, setQuestionAmount, setCategory } = callbacks;
  const { category, difficulty } = gameOptions;
  return (
    <Wrapper>
      <div className="question-amount">
        <RangeSlider callback={setQuestionAmount} />
      </div>
      <CategoryWrapper>
        {categoryOptions.map((option, i) => (
          <SelectionButton
            isSelected={category === option[1]}
            key={i}
            value={option[1]}
            keyword={option[0].toLowerCase()}
            onClick={(e) => {
              setCategory(e);
            }}
          />
        ))}
      </CategoryWrapper>
      <DifficultyWrapper>
        {difficultyOptions.map((option, i) => (
          <SelectionButton
            isSelected={difficulty === option[1]}
            key={i}
            value={option[1]}
            keyword={option[0].toLowerCase()}
            onClick={(e) => {
              setDifficulty(e);
            }}
          />
        ))}
      </DifficultyWrapper>
    </Wrapper>
  );
};

export default PrepareGameCard;
