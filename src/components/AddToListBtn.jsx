import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddToListBtn({ game }) {
	const navigate = useNavigate();

	async function handleClick() {
		await fetch("http://localhost:5000/list/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(game),
		}).catch((error) => {
			console.error(error);
		});

		navigate("/gamesList");
	}

	return <button onClick={handleClick}>Add</button>;
}
