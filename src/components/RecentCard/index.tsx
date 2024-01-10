import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container } from "./styled";
import CarouselCard from "./CarouselCard";
import { RecentCardProps } from "../../types/recentCard.types";
import settings from "./settings";

const RecentCard: React.FC<RecentCardProps> = ({ data }) => {
  return (
    <Container>
      <Slider {...settings}>
        {data.map((item, index) => (
          <CarouselCard key={index} {...item} />
        ))}
      </Slider>
    </Container>
  );
};

export default RecentCard;
