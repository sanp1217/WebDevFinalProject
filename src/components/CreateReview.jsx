import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateReview() {
  //from the url that ReviewBtn sets, based on the game clicked
  const { gameName } = useParams();

  //for showing in the html to user
  const formattedGameName = gameName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  //to be sent to the db
  const [form, setForm] = useState({
    game: gameName,
    review: "",
    rating: "",
  });

  const navigate = useNavigate();

  //Updates state of form
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const newReview = { ...form };
    await fetch("http://localhost:5000/review/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    }).catch((error) => {
      console.log(error);
    });

    setForm({ game: "", review: "", rating: "" });
    navigate("/reviews");
  }

  return (
    <div>
      <h3>Create New Review For {formattedGameName}</h3>
      <form onSubmit={onSubmit}>
        <div className="formDiv">
          <label htmlFor="review">Review</label>
          <input
            type="text"
            className="formReview"
            value={form.review}
            onChange={(e) => updateForm({ review: e.target.value })}
          />

          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            min={1}
            max={10}
            className="formRating"
            value={form.rating}
            onChange={(e) => updateForm({ rating: e.target.value })}
          />

          <input type="submit" value="Create review" />
        </div>
      </form>
    </div>
  );
}
