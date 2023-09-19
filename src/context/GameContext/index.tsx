import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { initialState } from "./constants";
import { GameCard, GameContextState, GameStatus } from "./interfaces";

const GameContext = createContext(initialState);

export const GameContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [status, setStatus] = useState<GameStatus>("Menu");
  const [cards, setCards] = useState<GameCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<GameCard[]>([]);
  const [pairedCards, setPairedCards] = useState<string[]>([]);

  const setSelectedCard = (card: GameCard) => {
    if (selectedCards.length === 2) {
      setSelectedCards([card]);
    } else {
      setSelectedCards((current) => [...current, card]);
    }
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      if (selectedCards[0].emoji === selectedCards[1].emoji) {
        setPairedCards((current) => [...current, selectedCards[0].emoji]);
      } else {
        setTimeout(() => {
          setSelectedCards([]);
        }, 500);
      }
    }
  }, [selectedCards]);

  useEffect(() => {
    if (status === "Menu") {
      setPairedCards([]);
      setSelectedCards([]);
    }
  }, [status]);

  return (
    <GameContext.Provider
      value={{
        status,
        setStatus,
        cards,
        setCards,
        selectedCards,
        setSelectedCard,
        pairedCards,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextState => {
  return useContext(GameContext);
};
