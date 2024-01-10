import React from "react";
import {
  BoxIcon,
  CardContainer,
  CardImage,
  Section,
} from "./styled";
import { CarouselCardProps } from "../../../types/recentCard.types";
import ProgressBar from "../../ProgressBar";
import { H1, Span } from "../../../shared/themes/heading";

const CarouselCard: React.FC<CarouselCardProps> = ({
  image,
  title,
  percentage,
  color,
}) => {
  return (
    <CardContainer>
      <BoxIcon>
        <CardImage bg={image} />
      </BoxIcon>

      <H1>{title}</H1>
      <Span> {`You completed ${percentage}%`}</Span>
      <Section>
        <ProgressBar percentage={percentage} color={color} />
      </Section>
    </CardContainer>
  );
};

export default CarouselCard;
