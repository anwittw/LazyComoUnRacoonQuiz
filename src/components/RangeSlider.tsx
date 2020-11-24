import React, { useState, useEffect } from "react";
import { RangeSliderWrapper } from "./RangeSlider.styles";

type SliderProps = {
  callback: any;
};

const RangeSlider: React.FC<SliderProps> = ({ callback }) => {
  const [rangeValue, setRangeValue] = useState("10");

  useEffect(() => {
    callback(rangeValue);
  }, [rangeValue]);

  return (
    <RangeSliderWrapper>
      <div className="questions">
        <p>Number of Questions: {rangeValue}</p>
        <input
          type="range"
          min="0"
          max="50"
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
      </div>
    </RangeSliderWrapper>
  );
};

export default RangeSlider;
