import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';
import Deck from './models/Deck';

config();
const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
	res.send("hello World! Test");
});

app.get('/decks', async (req: Request, res: Response) => {
	const decks = await Deck.find();
	res.json(decks);
});

app.post("/decks", async (req: Request, res: Response) => {
	const title = req.body.title;
	const newDeck = new Deck({
		title: title,
	});
	const createdDeck = await newDeck.save();
	res.json(createdDeck);
});

app.delete("/decks/:deckId", async (req: Request, res: Response) => {
	const deckId = req.params.deckId;
	const deck = await Deck.findByIdAndDelete(deckId);
	res.json(deck);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
	console.log(`listening to port ${PORT}`);
	app.listen(PORT);
})
