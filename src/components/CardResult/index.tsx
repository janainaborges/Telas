import {
  Box,
  Case,
  Circular,
  Container,
  Content,
  Description,
} from "./styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import colors from "../../shared/themes/colors";
import title from "../../shared/themes/title";
import React from "react";
import { CardResultI } from "../../types/cardResult.types";
import { H1, Span } from "../../shared/themes/heading";

const CardResult: React.FC<CardResultI> = ({ percentage }) => {
  return (
    <Container>
      <Content />
      <Case>
        <Circular>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={10}
            styles={buildStyles({
              textSize: `${title.size.m}px`,
              pathTransitionDuration: 0.5,
              pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
              textColor: `${colors.dark}`,
              trailColor: `${colors.light}`,
            })}
          />
        </Circular>
        <Box>
          <H1>Good Result!</H1>
          <Span>Share your achievement with your friend</Span>
        </Box>
      </Case>
    </Container>
  );
};
export default CardResult;
