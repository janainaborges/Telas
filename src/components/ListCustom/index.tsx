import { H1, Span } from "../../shared/themes/heading";
import { ListCustomI } from "../../types/list.types";
import {
  BoxIcon,
  CardImage,
  Container,
  Content,
  Description,
  Icon,
  Start,
} from "./styled";
import React from "react";

const ListCustom: React.FC<ListCustomI> = ({ popular, data, border}) => {
  return (
    <div>
      <Container key={data.key}>
        <Content>
          <BoxIcon color={data.color} border={border}>
            <CardImage bg={data.image} />
          </BoxIcon>
          <Description>
            <H1 style={{margin: 0}}>{data.title}</H1>
            <Span>{data.describe}</Span>
          </Description>
        </Content>
        {popular && (
          <Start>
            <Icon />
            <Span>4.8</Span>
          </Start>
        )}
      </Container>
    </div>
  );
};
export default ListCustom;
