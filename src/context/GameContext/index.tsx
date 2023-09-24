import {
  FC,
  PropsWithChildren,
  createContext,
  useState,
  useContext,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import {
  initialContextValue,
  initialGameState,
  stateActions,
} from "./constants";
import {
  GameCard,
  GameContextValue,
  GameDifficulty,
  GameStatus,
} from "./interfaces";
import { generatePlayableCards } from "./actions";
import { gameStateReducer } from "./store";

const {
  SET_GAME_CARDS,
  SET_GAME_DIFFICULTY,
  SET_GAME_STATUS,
  SET_PAIRED_CARDS,
  SET_SELECTED_CARDS,
  SET_TRIES,
} = stateActions;

const GameContext = createContext(initialContextValue);

export const GameContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [
    { cards, pairedCards, selectedCards, difficulty, status, tries },
    dispatch,
  ] = useReducer(gameStateReducer, initialGameState);

  const setStatus = useCallback((gameStatus: GameStatus) => {
    dispatch({
      type: SET_GAME_STATUS,
      payload: gameStatus,
    });
  }, []);

  const setCards = useCallback((gameCards: GameCard[]) => {
    dispatch({
      type: SET_GAME_CARDS,
      payload: gameCards,
    });
  }, []);

  const setSelectedCards = useCallback((gameCards: GameCard[]) => {
    dispatch({
      type: SET_SELECTED_CARDS,
      payload: gameCards,
    });
  }, []);

  const setPairedCards = useCallback((pairedCards: string[]) => {
    dispatch({
      type: SET_PAIRED_CARDS,
      payload: pairedCards,
    });
  }, []);

  const addPairedCard = useCallback(
    (pairedCard: string) => {
      setPairedCards([...pairedCards, pairedCard]);
    },
    [pairedCards, setPairedCards]
  );

  const setTries = useCallback((tries: number) => {
    dispatch({
      type: SET_TRIES,
      payload: tries,
    });
  }, []);

  const addTry = useCallback(() => {
    setTries(tries + 1);
  }, [setTries, tries]);

  const setDifficulty = useCallback((difficulty: GameDifficulty) => {
    dispatch({
      type: SET_GAME_DIFFICULTY,
      payload: difficulty,
    });
  }, []);

  const setSelectedCard = useCallback(
    (card: GameCard) => {
      if (selectedCards.length === 2) {
        setSelectedCards([card]);
      } else {
        setSelectedCards([...selectedCards, card]);
      }
    },
    [selectedCards, setSelectedCards]
  );

  const clearGame = useCallback(() => {
    setPairedCards([]);
    setSelectedCards([]);
    setTries(0);
  }, [setPairedCards, setSelectedCards, setTries]);

  const startGame = (difficulty: GameDifficulty) => {
    clearGame();
    setDifficulty(difficulty);
    setCards(generatePlayableCards(difficulty));
    setStatus("Playing");
  };

  useEffect(() => {
    if (selectedCards.length === 2 && !isAnimating) {
      addTry();
      if (selectedCards[0].emoji === selectedCards[1].emoji) {
        setSelectedCards([]);
        addPairedCard(selectedCards[0].emoji);
      } else {
        setIsAnimating(true);
        setTimeout(() => {
          setSelectedCards([]);
          setIsAnimating(false);
        }, 500);
      }
    }
  }, [
    selectedCards,
    addPairedCard,
    setSelectedCards,
    setTries,
    addTry,
    isAnimating,
  ]);

  useEffect(() => {
    if (status === "Menu") {
      clearGame();
    }
  }, [clearGame, status]);

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
        tries,
        startGame,
        difficulty,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextValue => {
  return useContext(GameContext);
};
