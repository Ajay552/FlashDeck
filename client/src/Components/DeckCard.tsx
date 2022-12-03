interface OwnProps {
	title: string;
}

const DeckCard = (props: OwnProps) => {
	const { title } = props;
	return (
		<div className='deck'>
			{title}
		</div>
	);
}

export default DeckCard;