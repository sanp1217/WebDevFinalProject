import React from "react";
import "./componentStyles/Review.css";

export default function Review({ review, gameImage} ) {
  return (
    <div className="container">
      <div className="reviewContainer">
        <h1>{review.game}</h1>
        <img src={gameImage} loading="lazy"></img>
        <p>{review.rating}</p>
        <p>{review.review}</p>
      </div>
    </div>
  );
}
