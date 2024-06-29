import React, { useEffect, useState } from "react";
import Review from "./Review";
import credentials from "../../credentials.dev.json";

export default function ReviewList() {
  const apiKey = credentials.rawg.apiKey;
  const [reviews, setReviews] = useState([]);
  const [gameImages, setGameImages] = useState({});

  const fetchGamePicture = async (gameName) => {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${apiKey}&search=${gameName}&search_exact=true`
    );
    const data = await response.json();
    console.log(data.results[0].background_image);
    return data.results[0].background_image;
  }

  //fetches reviews from DB and game images
  useEffect(() => {
    async function getReviewsAndImages() {
      try {
        const response = await fetch("http://localhost:5000/review");
        const reviews = await response.json();
        setReviews(reviews);

        const images = {};
        for(const review of reviews){
          const gameImage = await fetchGamePicture(review.game);
          images[review.game] = gameImage;
        }
        setGameImages(images);
      } catch (error) {
        console.error(error);
      }
    }

    getReviewsAndImages();
  }, []);

  function reviewList() {
    return reviews.map((review, i) => {
      const gameImage = gameImages[review.game];
      return <Review key={i} review={review} gameImage={gameImage} />;
    });
  }

  return (
    <div>
      <h3>Your Reviews</h3>
      {reviewList()}
    </div>
  );
}
