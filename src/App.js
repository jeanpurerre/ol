import './App.css';
import { useEffect, useState } from 'react';
import Board from './components/Board/Board';
import Timer from './components/Temporizador/Timer'; // Importa el componente Timer

const cardList = [
  'hearts_ace', 'diamonds_king', 'clubs_queen', 'spades_jack',
  'hearts_10', 'diamonds_9', 'clubs_8', 'spades_7'
];

const App = () => {
  const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const shuffledCardList = shuffleArray([...cardList, ...cardList]);
    setShuffledMemoBlocks(
      shuffledCardList.map((card, i) => ({
        index: i,
        card,
        flipped: false,
      }))
    );
  }, []);

  const shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const handleMemoClick = (memoBlock) => {
    if (animating || memoBlock.flipped) return;

    const flippedMemoBlock = { ...memoBlock, flipped: true };
    let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
    shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setShuffledMemoBlocks(shuffledMemoBlocksCopy);

    if (selectedMemoBlock === null) {
      setselectedMemoBlock(flippedMemoBlock);
    } else {
      if (selectedMemoBlock.card === memoBlock.card) {
        setselectedMemoBlock(null);
        checkGameOver(shuffledMemoBlocksCopy);
      } else {
        setAnimating(true);
        setTimeout(() => {
          shuffledMemoBlocksCopy[selectedMemoBlock.index].flipped = false;
          shuffledMemoBlocksCopy[memoBlock.index].flipped = false;
          setShuffledMemoBlocks(shuffledMemoBlocksCopy);
          setselectedMemoBlock(null);
          setAnimating(false);
        }, 1000);
      }
    }
  };

  const checkGameOver = (shuffledMemoBlocksCopy) => {
    if (shuffledMemoBlocksCopy.every(block => block.flipped)) {
      setIsGameOver(true);
      alert("¡Felicidades! Has terminado el juego.");
    }
  };

  return (
    <div className="App">
      <h1>Juego de Memoria de Cartas de Póker</h1>
      <Timer isGameOver={isGameOver} />
      <Board
        memoBlocks={shuffledMemoBlocks}
        animating={animating}
        handleMemoClick={handleMemoClick}
      />
    </div>
  );
};

export default App;
