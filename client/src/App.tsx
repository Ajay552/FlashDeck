import { useEffect, useState } from 'react'
import './App.css'
import CreateDeck from './Components/CreateDeck';
import Decks from './Components/Decks';
import { DECK } from './models/DeckType';

function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<DECK[]>([]);
  const url = "https://ajay552-humble-broccoli-rwq979w4q993ww9p-5000.preview.app.github.dev/decks";

  const handelCreateDeck = async (evt: React.FormEvent) => {
    evt.preventDefault();
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (res.status === 200) setTitle("");
  }

  const getAllDecks = async () => {
    try {
      const response = await fetch(url);
      const decks = await response.json();
      setDecks(decks);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllDecks();
  }, [])

  return (
    <div className="App">
      <Decks decks={decks} />
      <CreateDeck
        setTitle={setTitle}
        handelCreateDeck={handelCreateDeck}
        title={title} />
    </div>
  )
}

export default App
