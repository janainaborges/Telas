import React from "react";
import ListCustom from "../ListCustom";
import { ListCustomP } from "../../types/list.types";
import { Link } from "react-router-dom";

const PopularQuiz: React.FC<ListCustomP> = ({ data, popular, border }) => {
  return (
    <div>
      {data.map((item) => (
        <Link
          key={item.key}
          to={`/detail/${item.key}/`}
          style={{ textDecoration: "none" }}
        >
          <ListCustom
            data={{
              image: item.image,
              color: item.color,
              title: item.title,
              key: item.key,
              describe: item.describe
            }}
            popular={popular}
            border={border}
          />
        </Link>
      ))}
    </div>
  );
};

export default PopularQuiz;
