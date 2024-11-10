import './MemoBlock.css';

const MemoBlock = ({ animating, handleMemoClick, memoBlock }) => {
    const getCardSymbol = (card) => {
        const cardSymbols = {
            hearts_ace: '🂱',
            diamonds_king: '🃏',
            clubs_queen: '🃑',
            spades_jack: '🃏',
            hearts_10: '🂻',
            diamonds_9: '🃍',
            clubs_8: '🃌',
            spades_7: '🃊'
        };
        return cardSymbols[card] || '?';
    };

    return (
        <div
            className="memo-block"
            onClick={() => (!memoBlock.flipped && !animating) && handleMemoClick(memoBlock)}
        >
            <div className={`memo-block-inner ${memoBlock.flipped ? 'memo-block-flipped' : ''}`}>
                <div className="memo-block-front"></div>
                <div className="memo-block-back">
                    {memoBlock.flipped ? getCardSymbol(memoBlock.card) : '?'}
                </div>
            </div>
        </div>
    );
};

export default MemoBlock;
