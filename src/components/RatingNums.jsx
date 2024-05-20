import React from 'react'

export default function RatingNums({ updateForm }) {
  const ratingNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function handleRatingSelection(num) {
    updateForm({ rating: num });
  };

  return (
    <div>
      {ratingNums.map((num, index) => (
        //type is button so it doesn't submit the form autmatically
        <button key={index} type="button" onClick={() => handleRatingSelection(num)}>{num}</button>
      ))}
    </div>
  )
}
