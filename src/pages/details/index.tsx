import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../layout";
import { popularData, question } from "../../shared/mock/popularData";
import ListCustom from "../../components/ListCustom";
import { List, Title } from "./styled";
import Button from "../../components/Button";
import { H1 } from "../../shared/themes/heading";

export default function Details() {
  const { id } = useParams();
  const route = useNavigate();

  const item = popularData.filter((e: any) => e.key === Number(id));

  const capture = item.map((e: any) => e.title);

  const handleClick = () => {
    return route(`/detail/${id}/${capture[0]}`);
  };
  return (
    <Layout name="Detail Quiz" changeNav={"P"} links={"/"}>
      {item.map((item) => (
        <ListCustom
          data={{
            image: item.image,
            color: item.color,
            title: item.title,
            key: item.key,
            describe: item.describe,
          }}
          popular
          border
        />
      ))}

      <Title>
        <H1>Brief explanation about this quiz</H1>
      </Title>
      {question.map((item) => (
        <ListCustom
          data={{
            image: item.image,
            color: item.color,
            title: item.title,
            key: item.key,
            describe: item.describe,
          }}
          popular={false}
          border={false}
        />
      ))}
      <Title>
        <H1>Please read the text below carefully so you can understand it</H1>
      </Title>
      <List>
        <li>
          10 point awarded for a correct answer and no marks for a incorrect
          answer
        </li>
        <li>Tap on options to select the correct answer</li>
        <li>
          Click submit if you are sure you want to complete all the quizzes
        </li>
      </List>
      <Button text="Get Started" onClick={handleClick} button={"S"} />
    </Layout>
  );
}
