import React from "react";
import "./componentStyles/GameInList.css";

export default function GameInList({ game }) {
	return (
		<div className="OutContainer">
			<div className="gamesListContainer">
				<div className="gameAndReleaseCon">
					<h1>{game.name}</h1>
					<p>Released {game.releaseDate}</p>
				</div>
				<img src={game.image}></img>
			</div>
		</div>
	);
}
