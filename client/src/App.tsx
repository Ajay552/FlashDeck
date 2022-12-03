import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("")

  const handelCreateDeck = async (evt: React.FormEvent) => {
    evt.preventDefault();
    const url = "https://ajay552-humble-broccoli-rwq979w4q993ww9p-5000.preview.app.github.dev/decks";
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    });
    
    if(res.status === 200) setTitle("");

  }

  return (
    <div className="App">
      <form onSubmit={handelCreateDeck}>
        <label htmlFor="deck-title">Deck Title</label>
        <input
          id='deck-title'
          type="text"
          value={title}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(evt.target.value)
          }} />
        <button>Create Deck</button>
      </form>
    </div>
  )
}

export default App
