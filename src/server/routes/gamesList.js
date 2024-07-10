import express from "express";
import { getDb } from "../db/conn.js";

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
	};
	const res = await dbConnect.collection("gamesList").insertOne(gameToAdd);
	response.json(res);
});

export { gamesListRoutes };
