import { Monster } from "../containers/App";
import React from "react";

const Card = ({ id, name, email }: Monster) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robot" src={`https://robohash.org/${id}?size=200x200`}></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
