import express from "express";
import { getDb } from "../db/conn.js";
import { ObjectId } from "mongodb";

const reviewRoutes = express.Router();

//Returns all reviews
reviewRoutes.route("/review").get(async function (req, res) {
	let dbConnect = getDb();
	const result = await dbConnect.collection("reviews").find({}).toArray();
	res.json(result);
});

// Inserts one review
reviewRoutes.route("/review/add").post(async function (req, response) {
	let db_connect = getDb();
	let review = {
		game: req.body.game,
		review: req.body.review,
		rating: req.body.rating,
	};
	const res = await db_connect.collection("reviews").insertOne(review);
	response.json(res);
});

export { reviewRoutes };
