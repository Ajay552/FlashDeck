import "./DeckCard.css";

interface OwnProps {
	title: string;
	deckId: string;
}


const DeckCard = (props: OwnProps) => {
	const { title, deckId } = props;
	const URL = "https://ajay552-humble-broccoli-rwq979w4q993ww9p-5000.preview.app.github.dev";

	const handelDeleteDeck = async (deckId: string) => {
		const response = await fetch(`/decks/${URL}${deckId}`, {
			method: "DELETE",
		});
		const deletedDeck = await response.json();
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