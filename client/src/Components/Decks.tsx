import { DECK } from "../models/DeckType";
import DeckCard from "./DeckCard";

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
							key={deck._id} />
					)
				})
			}
		</div>
	)
}

export default Decks;