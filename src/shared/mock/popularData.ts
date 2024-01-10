import computer from "../../assets/computer.png";
import ball from "../../assets/ball.png";
import music from "../../assets/music.png";
import doc from "../../assets/doc.png";
import times from "../../assets/times.png";

const popularData = [
  {
    image: computer,
    color: "#ffe3be",
    title: "Technology",
    key: 0,
    describe: "10 Question",
  },
  {
    image: ball,
    color: "#eaeeff",
    title: "Sport",
    key: 1,
    describe: "10 Question",
  },
  {
    image: music,
    color: "#f6e5e5",
    title: "Music",
    key: 2,
    describe: "10 Question",
  },
];

const question = [
  {
    image: doc,
    color: "#ffe3be",
    title: "10 Question",
    key: 0,
    describe: "10 point for correct answer",
  },
  {
    image: times,
    color: "#ffe3be",
    title: "1 hour 20 min",
    key: 1,
    describe: "Total duration of the quiz",
  },
];
export { popularData, question };
