interface OwnProp {
    setTitle: (title: string) => void;
    handelCreateDeck: (evt: React.FormEvent) => void;
    title: string;
}

const CreateDeck = (props: OwnProp) => {
    const { setTitle, handelCreateDeck, title } = props;
    return (
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
    );
}

export default CreateDeck;