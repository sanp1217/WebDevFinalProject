import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import GameInList from "./GameInList";

export default function GamesList() {
	const [gamesInList, setGamesInList] = useState([]);

	function removeGame(idToDelete) {
		setGamesInList((prevGames) =>
			prevGames.filter((game) => game._id !== idToDelete)
		);
	}

	useEffect(() => {
		async function getGamesInList() {
			try {
				const response = await fetch("http://localhost:5000/list");
				const gamesInList = await response.json();
				setGamesInList(gamesInList);
			} catch (error) {
				console.error(error);
			}
		}

		getGamesInList();
	}, []);

	function gamesList() {
		return gamesInList.map((game, i) => {
			return <GameInList key={i} game={game} removeGame={removeGame} />;
		});
	}

	return (
		<div>
			<h3>Your List</h3>
			{gamesList()}
		</div>
	);
}
