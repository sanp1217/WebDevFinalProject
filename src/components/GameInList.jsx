import React, { useState } from "react";
import "./componentStyles/GameInList.css";

export default function GameInList({ game, removeGame }) {
	const [status, setStatus] = useState(game.status);
	async function changeGameStatus(status, gameDBId) {
		setStatus(status);

		let gameToChange = {
			status: status,
			id: gameDBId,
		};

		await fetch("http://localhost:5000/list/changeStatus", {
			method: "PATCH",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(gameToChange),
		}).catch((error) => {
			console.error(error);
		});
	}

	async function deleteGameFromList(game) {
		await fetch("http://localhost:5000/list/deleteGameFromList", {
			method: "DELETE",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ gameId: game._id }),
		}).catch((error) => {
			console.error(error);
		});

		removeGame(game._id);
	}

	return (
		<div className="OutContainer">
			<div className="gamesListContainer">
				<div className="deleteBtnCont">
					<button
						className="deleteBtn"
						onClick={() => deleteGameFromList(game)}
					>
						X
					</button>
				</div>
				<div className="gameAndReleaseCon">
					<h1>{game.name}</h1>
					<p>Released {game.releaseDate}</p>
					<div className="statusDropdown">
						<label htmlFor="gameStatus">Status: </label>
						<select
							onChange={(e) =>
								changeGameStatus(e.target.value, game._id)
							}
							name="status"
							id="status"
							value={status}
						>
							<option value="playing">Playing</option>
							<option value="finished">Finished</option>
							<option value="dropped">Dropped</option>
						</select>
					</div>
				</div>
				<img src={game.image}></img>
			</div>
		</div>
	);
}
