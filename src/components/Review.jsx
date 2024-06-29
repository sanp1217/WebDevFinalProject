import React from "react";

export default function Review({ review, gameImage} ) {
  return (
    <div>
      <img src={gameImage} loading="lazy"></img>
      <p>{review.game}</p>
      <p>{review.review}</p>
      <p>{review.rating}</p>
    </div>
  );
}
