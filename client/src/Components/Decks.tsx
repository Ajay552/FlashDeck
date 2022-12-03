import { DECK } from "../models/DeckType";
import DeckCard from "./DeckCard";
import "./Decks.css";

interface OwnProps {
	decks: DECK[];
}

const Decks = (props: OwnProps) => {
	const { decks } = props;
	return (
		<div className="decks">
			{
				decks.map((deck: DECK) => {
					return (
						<DeckCard
							title={deck.title}
							deckId={deck._id}
							key={deck._id}
						/>
					)
				})
			}
		</div>
	)
}

export default Decks;