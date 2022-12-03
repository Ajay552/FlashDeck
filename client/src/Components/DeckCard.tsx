import { deleteDeck } from "../api/DecksApi";
import "./DeckCard.css";

interface OwnProps {
	title: string;
	deckId: string;
}


const DeckCard = (props: OwnProps) => {
	const { title, deckId } = props;
	const handelDeleteDeck = async (deckId: string) => {
		const deletedDeck = await deleteDeck(deckId);
		console.log("deleted Deck", deletedDeck);
	}


	return (
		<div className='deck'>
			<button
				className="CloseButton"
				onClick={() => handelDeleteDeck(deckId)}>
				X
			</button>
			<div className="deckTitle" title={title}>{title}</div>
		</div>
	);
}

export default DeckCard;