import express from "express";
import { getDb } from "../db/conn.js";
import { ObjectId } from "mongodb";

const gamesListRoutes = express.Router();

//Returns games in users list
gamesListRoutes.route("/list").get(async function (req, res) {
	let dbConnect = getDb();
	const result = await dbConnect.collection("gamesList").find({}).toArray();
	res.json(result);
});

//Inserts game to users list
gamesListRoutes.route("/list/add").post(async function (req, response) {
	let dbConnect = getDb();
	let gameToAdd = {
		name: req.body.name,
		releaseDate: req.body.released,
		image: req.body.background_image,
		status: "Playing",
	};
	const res = await dbConnect.collection("gamesList").insertOne(gameToAdd);
	response.json(res);
});

gamesListRoutes.route("/list/changeStatus").patch(async function (req, res) {
	let dbConnect = getDb();
	const result = await dbConnect
		.collection("gamesList")
		.updateOne(
			{ _id: new ObjectId(req.body.id) },
			{ $set: { status: req.body.status } }
		);
	res.json(result);
});

gamesListRoutes
	.route("/list/deleteGameFromList")
	.delete(async function (req, res) {
		let dbConnect = getDb();
		const result = await dbConnect
			.collection("gamesList")
			.deleteOne({ _id: new ObjectId(req.body.gameId) });
		res.json(result);
	});

export { gamesListRoutes };
