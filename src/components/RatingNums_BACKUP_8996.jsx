<<<<<<< HEAD
import React from 'react'

export default function RatingNums({ updateForm }) {
  const ratingNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function handleRatingSelection(num, e) {
    //Make the button clicked grey to show which one is selected and reset the others
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.style.backgroundColor = 'white');
    e.target.style.backgroundColor = 'grey';
    updateForm({ rating: num });
  };

  return (
    <div>
      {ratingNums.map((num, index) => (
        //type is button so it doesn't submit the form autmatically
        <button key={index} type="button" onClick={(e) => handleRatingSelection(num, e)}>{num}</button>
      ))}
    </div>
  )
}
=======
import React from 'react'

export default function RatingNums({ updateForm }) {
  const ratingNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function handleRatingSelection(num, e) {
    //Make the button clicked grey to show which one is selected and reset the others
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.style.backgroundColor = 'rgb(38, 38, 38)');
    e.target.style.backgroundColor = 'rgb(10, 10, 10)';
    updateForm({ rating: num });
  };

  return (
    <div>
      {ratingNums.map((num, index) => (
        //type is button so it doesn't submit the form autmatically
        <button key={index} type="button" onClick={(e) => handleRatingSelection(num, e)}>{num}</button>
      ))}
    </div>
  )
}
>>>>>>> 95f23cc54d7af6970e1f85b887c1a88e6dfcff53
