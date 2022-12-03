import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';
import { createDeckController } from './controllers/createDeckController';
import { getDecksController } from './controllers/getDeckController';
import { deleteDeckController } from './controllers/deleteDeckController';

config();
const PORT = 5000;

const app = express();

app.use(cors({
	origin: "*",
}));
app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
	res.send("hello World! Test");
});

app.get('/decks', getDecksController);
app.post("/decks", createDeckController);
app.delete("/decks/:deckId", deleteDeckController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
	console.log(`listening to port ${PORT}`);
	app.listen(PORT);
})
