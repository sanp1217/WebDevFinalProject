import React from "react";

export default function Review(props) {
  return (
    <div>
      <p>{props.review.game}</p>
      <p>{props.review.review}</p>
      <p>{props.review.rating}</p>
    </div>
  );
}
