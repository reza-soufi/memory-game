import "./App.css";
import {useState} from "react";

const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]

interface CardsType {
  id: number;
  src: string;
}

function App() {
  const [cards , setCards ] = useState<CardsType[]>([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages , ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card , id: Math.random()}))
    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards , turns)

  return (
      <div className="App">
        <h1>Magic Match</h1>
        <button onClick={shuffleCards}>New Game</button>
      </div>
  )
}

export default App
