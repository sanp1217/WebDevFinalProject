import React, { useEffect, useState } from "react";
import Review from "./Review";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);

  //fetches reviews from DB
  useEffect(() => {
    async function getReviews() {
      try {
        const response = await fetch("http://localhost:5000/review");
        const reviews = await response.json();
        setReviews(reviews);
      } catch (error) {
        console.error(error);
      }
    }

    getReviews();
  }, [reviews.length]);

  function reviewList() {
    return reviews.map((review, i) => {
      return <Review key={i} review={review} />;
    });
  }

  return (
    <div>
      <h3>Your Reviews</h3>
      {reviewList()}
    </div>
  );
}
