import React from "react";
import { Button } from "./SelectionButton.styles";

// Button to select Game Options before Start

type SelectionProps = {
  isSelected: boolean;
  keyword: string;
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const SelectionButton: React.FC<SelectionProps> = ({
  isSelected,
  keyword,
  value,
  onClick,
}) => {
  return (
    <Button value={value} onClick={onClick} isSelected={isSelected}>
      <div>{keyword}</div>
    </Button>
  );
};

export default SelectionButton;
