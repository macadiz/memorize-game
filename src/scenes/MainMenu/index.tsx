import { useGame } from "../../context/GameContext";

import "./MainMenu.css";

const GameStart = () => {
  const { startGame } = useGame();

  return (
    <>
      <h3>Choose difficulty:</h3>
      <div className="difficulty-buttons-container">
        <button className="primary" onClick={() => startGame("Easy")}>
          Easy
        </button>
        <button className="primary" onClick={() => startGame("Medium")}>
          Medium
        </button>
        <button className="primary" onClick={() => startGame("Hard")}>
          Hard
        </button>
      </div>
    </>
  );
};

export default GameStart;
