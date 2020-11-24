import React from "react";
import { FinalScoreCardWrapper, RestartButton } from "./FinalScoreCard.styles";

type FinalScoreProps = {
  scores: number;
  resetGame: any;
};

const FinalScoreCard: React.FC<FinalScoreProps> = ({ scores, resetGame }) => {
  return (
    <FinalScoreCardWrapper>
      <div>YOUR FINAL SCORE IS: {scores}</div>
      <RestartButton onClick={resetGame}>TRY AGAIN</RestartButton>
    </FinalScoreCardWrapper>
  );
};

export default FinalScoreCard;
