import React, { useState, useEffect } from "react";

export default function GameDescription({ id }) {
  if (!id) {
    console.log("loading");
    return null;
  }

  const [gameDesc, setGameDesc] = useState();

  useEffect(() => {
    getDesc(id);
  }, []);

  const getDesc = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/games/${id}?key=e529a93a27a343339b1152408717288c`
    );
    const data = await response.json();
    setGameDesc(data.description);
  };

  //api returns description in html, this displays it in html
  return <div dangerouslySetInnerHTML={{ __html: gameDesc }} />;
}
