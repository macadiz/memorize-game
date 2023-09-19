import { FC } from "react";
import { GameContextProvider } from "./context/GameContext";
import GameScreen from "./scenes/GameScreen";

import "./App.css";

const App: FC = () => {
  return (
    <GameContextProvider>
      <GameScreen />
    </GameContextProvider>
  );
};

export default App;
