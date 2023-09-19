import { useGame } from "../../context/GameContext";
import { GameDifficulty } from "../../context/GameContext/interfaces";
import { generatePlayableCards } from "./actions";

import "./MainMenu.css";

const GameStart = () => {
  const { setCards, setStatus } = useGame();

  const generateCards = (difficulty: GameDifficulty) => {
    setCards(generatePlayableCards(difficulty));
    setStatus("Playing");
  };

  return (
    <>
      <h3>Choose difficulty:</h3>
      <div className="difficulty-buttons-container">
        <button className="primary" onClick={() => generateCards("Easy")}>
          Easy
        </button>
        <button className="primary" onClick={() => generateCards("Medium")}>
          Medium
        </button>
        <button className="primary" onClick={() => generateCards("Hard")}>
          Hard
        </button>
      </div>
    </>
  );
};

export default GameStart;
