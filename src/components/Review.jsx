import React from "react";
import "./componentStyles/Review.css";

export default function Review({ review, gameImage }) {
	return (
		<div className="container">
			<div className="reviewContainer">
				<h1>{review.game.replaceAll("-", " ")}</h1>
				<img src={gameImage} loading="lazy"></img>
				<h2>You gave it a {review.rating}</h2>
				<p>{review.review}</p>
			</div>
		</div>
	);
}
