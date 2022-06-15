import React from "react";
import Card from "./Card";
import { Monster } from "../containers/App";

type CardListProps = {
  robots: Monster[];
};

const CardList = ({ robots }: CardListProps) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
