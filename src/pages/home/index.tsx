import React from "react";
import Layout from "../../layout";
import CardResult from "../../components/CardResult";
import RecentCard from "../../components/RecentCard";
import PopularQuiz from "../../components/PopularQuiz";
import carouselData from "../../shared/mock/carouselData";
import { popularData } from "../../shared/mock/popularData";
import { Line } from "../../shared/themes/heading";

const Home: React.FC = () => {
  return (
    <Layout name="Jessica" changeNav={"N"} links="">
      <CardResult percentage={70} />
      <Line>Recent Quiz</Line>
      <RecentCard data={carouselData} />
      <Line>Popular Quiz</Line>
      <PopularQuiz data={popularData} popular border />
    </Layout>
  );
};

export default Home;
