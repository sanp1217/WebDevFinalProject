import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import credentials from "../../credentials.dev.json";
import Game from "./Game";

const PAGE_SIZE = 20;

const Games = () => {
  const apiKey = credentials.rawg.apiKey;
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setGamesAndPages();
  }, [currentPage]);

  const setGamesAndPages = async () => {
    const gamesData = await fetchGames();
    setGames(gamesData.results);
    setTotalPages(Math.ceil(gamesData.count / PAGE_SIZE));
  };

  const fetchGames = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${apiKey}&page=${currentPage}`
    );
    const data = await response.json();
    return data;
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <article>
      <h1>Games:</h1>
      <div className="gamesDiv">
        {games.map((game, i) => (
          <Game key={i} data={game} />
        ))}
      </div>
      <div className="pagination">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </article>
  );
};

export default Games;
