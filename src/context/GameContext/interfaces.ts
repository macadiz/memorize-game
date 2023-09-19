export type GameStatus = "Playing" | "Menu";
export type GameDifficulty = "Easy" | "Medium" | "Hard";

export interface GameContextState {
  status: GameStatus;
  setStatus: (value: GameStatus) => void;
  cards: GameCard[];
  setCards: (cards: GameCard[]) => void;
  selectedCards: GameCard[];
  setSelectedCard: (card: GameCard) => void;
  pairedCards: string[];
}

export interface GameCard {
  emoji: string;
  id: string;
}
