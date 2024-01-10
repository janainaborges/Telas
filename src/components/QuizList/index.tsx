import React, { useState } from "react";
import { Line, List, StyledCheckbox } from "./styled";
import colors from "../../shared/themes/colors";
import { LineMedium } from "../../shared/themes/heading";
import { QuizListProps } from "../../types/quizList.types";

const QuizList: React.FC<QuizListProps> = ({ items }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleChange = (id: number) => {
    setSelectedAnswer(id);
  };

  return (
    <List>
      {items.map((item) => (
        <Line
          key={item.id}
          style={{
            backgroundColor:
              selectedAnswer === item.id
                ? item.isCorrect
                  ? `${colors.success}`
                  : `${colors.danger}`
                : "",
            border:
              selectedAnswer != null && item.isCorrect
                ? `1px solid ${colors.success}`
                : "none",
          }}
        >
          <LineMedium>
            <StyledCheckbox
              onChange={() => handleChange(item.id)}
              checked={selectedAnswer === item.id}
              disabled={selectedAnswer != null}
              className={
                selectedAnswer === item.id
                  ? item.isCorrect
                    ? "correct"
                    : "incorrect"
                  : ""
              }
            />
            {item.question}
          </LineMedium>
        </Line>
      ))}
    </List>
  );
};

export default QuizList;
