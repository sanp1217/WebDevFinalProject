import React from "react";
import "./componentStyles/Game.css";
import GameDescription from "./GameDescription";
import AddToListBtn from "./AddToListBtn";
import ReviewBtn from "./ReviewBtn";

export default function Game({ data }) {
  if (!data) {
    console.log("loading...");
    return null;
  }

  const name = data.name;
  const releaseDate = data.released;
  const image = data.background_image;
  const metacriticRating = data.metacritic;
  const id = data.id;

  return (
    <div className="gameDiv">
      <div className="imageDiv">
        <img className="gameImg" src={image}></img>
      </div>

      <div className="gameDetailsDiv">
        <h2>{name}</h2>
        <h2>Released: {releaseDate}</h2>
        <h2>Metacritic Rating: {metacriticRating}/100</h2>
      </div>

      <div className="buttonsDiv">
        <AddToListBtn />
        <ReviewBtn game={name} />
      </div>
    </div>
  );
}
