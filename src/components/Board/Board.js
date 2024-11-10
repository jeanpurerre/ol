import MemoBlock from '../MemoBlock/MemoBlock';
import './Board.css';

const Board = ({ animating, handleMemoClick, memoBlocks }) => {
    return (
        <main className="board">
            {memoBlocks.map((memoBlock, i) => (
                <MemoBlock
                    key={`${i}_${memoBlock.card}`} // Usamos 'card' en lugar de 'emoji' para el identificador
                    animating={animating}
                    handleMemoClick={handleMemoClick}
                    memoBlock={memoBlock}
                />
            ))}
        </main>
    );
};

export default Board;
