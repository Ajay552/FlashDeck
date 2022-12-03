import "./DeckCard.css";

interface OwnProps {
	title: string;
}

const DeckCard = (props: OwnProps) => {
	const { title } = props;
	return (
		<div className='deck'>
			<div className="CloseButton">X</div>
			<div className="deckTitle" title={title}>{title}</div>
		</div>
	);
}

export default DeckCard;