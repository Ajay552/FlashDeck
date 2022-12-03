import { Request, Response } from 'express';
import Deck from '../models/Deck';

export const createDeckController = async (req: Request, res: Response) => {
  const title = req.body.title;
  const newDeck = new Deck({
    title: title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
};