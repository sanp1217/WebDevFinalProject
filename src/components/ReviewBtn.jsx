import React from "react";
import { useNavigate } from "react-router-dom";

export default function ReviewBtn({ game }) {
  const navigate = useNavigate();

  function handleClick() {
    const formattedGameName = game.replace(/ /g, "-").toLowerCase();
    navigate(`/create-review/${formattedGameName}`);
  }

  return <button onClick={handleClick}>Review</button>;
}
