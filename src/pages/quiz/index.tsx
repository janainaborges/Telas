import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../layout";
import ProgressBar from "../../components/ProgressBar";
import { H1, Span } from "../../shared/themes/heading";
import QuizList from "../../components/QuizList";
import Button from "../../components/Button";
import { ButtonContent, Container, StyledTextarea } from "./styled";
import quizItems from "../../shared/mock/quizData";

export default function Quiz() {
  const { id, name } = useParams();
  const route = useNavigate();

  const pagePrevious = `/detail/${id}/`;
  const handleClick = () => {
    return route(pagePrevious);
  };

  const percentage = 65;
  console.log(id);
  return (
    <Layout changeNav={"T"} name={`${name}`} links={pagePrevious}>
      <Container>
        
        <div style={{ gap: "15px" }}>
        <ProgressBar percentage={percentage} color="" />
          <Span>Completed {percentage}%</Span>
        </div>

        <H1>The image below is a field image used for?</H1>
        <StyledTextarea placeholder={""} value={""} />
        <QuizList items={quizItems} />
        <ButtonContent>
          <Button text={"Previous"} button={"N"} onClick={handleClick} />
          <Button text={"Next"} button={"S"} />
        </ButtonContent>
      </Container>
    </Layout>
  );
}
