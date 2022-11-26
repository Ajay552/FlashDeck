import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck';

const PORT = 5000;

const app = express();

// const db = mongoose.connect('mongodb+srv://nova:OnePiece@cluster0.cpxrfgs.mongodb.net/?retryWrites=true&w=majority');

app.get('/', (req: Request, res: Response) => {
    res.send("hello World!");
});

app.post("/decks", async (req: Request, res: Response) => {
    const newDeck = new Deck({
        title: "Flash card deck",
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
})

mongoose.connect(
    'mongodb+srv://nova:OnePiece@cluster0.cpxrfgs.mongodb.net/?retryWrites=true&w=majority'
).then(() => {
    console.log(`listening to port ${PORT}`);
    app.listen(PORT);
})
