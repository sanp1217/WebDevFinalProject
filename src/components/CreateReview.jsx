import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RatingNums from "./RatingNums";
import "./componentStyles/CreateReview.css";

export default function CreateReview() {
	//from the url that ReviewBtn sets, based on the game clicked
	const { gameName } = useParams();

	//for showing in the html to user
	const formattedGameName = gameName
		.split("-")
		.map(
			(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
		)
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
		<div className="createReviewContainer">
			<h1>Create New Review For {formattedGameName}</h1>
			<form onSubmit={onSubmit}>
				<div className="formDiv">
					<textarea
						type="text"
						className="formReview"
						value={form.review}
						required
						onChange={(e) => updateForm({ review: e.target.value })}
					/>

					<label htmlFor="rating"></label>
					<div className="ratingButtons">
						<RatingNums updateForm={updateForm} />
					</div>

					<input type="submit" value="Create review" />
				</div>
			</form>
		</div>
	);
}
