import { DECK } from "../models/DeckType";
import { BASE_URL } from "./config";

export const createDeck = async (title: string) => {
  const res = await fetch(`${BASE_URL}/decks/`, {
    method: "POST",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    }
  });

  return res.json();
}

export const fetchAllDecks = async (): Promise<DECK[]> => {
  const response = await fetch(`${BASE_URL}/decks/`);
  return response.json();
}

export const deleteDeck = async (deckId: string) => {
  const response = await fetch(`${BASE_URL}/decks/${deckId}`, {
    method: "DELETE",
  });
  return await response.json();
}
