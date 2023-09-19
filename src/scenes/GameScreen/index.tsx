import { FC } from "react";
import { useGame } from "../../context/GameContext";
import MainMenu from "../MainMenu";
import MemorizeGame from "../MemorizeGame";
import "./GameScreen.css";

const GameScreen: FC = () => {
  const { status } = useGame();
  return (
    <div className="game-screen-container">
      <h2>Memorize</h2>
      {status === "Menu" && <MainMenu />}
      {status === "Playing" && <MemorizeGame />}
    </div>
  );
};

export default GameScreen;
