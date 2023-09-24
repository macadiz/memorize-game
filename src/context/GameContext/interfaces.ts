export type GameStatus = "Playing" | "Menu";
export type GameDifficulty = "Easy" | "Medium" | "Hard";

export interface GameContextValue {
  status: GameStatus;
  setStatus: (value: GameStatus) => void;
  cards: GameCard[];
  setCards: (cards: GameCard[]) => void;
  selectedCards: GameCard[];
  setSelectedCard: (card: GameCard) => void;
  startGame: (difficulty: GameDifficulty) => void;
  pairedCards: string[];
  tries: number;
  difficulty: GameDifficulty;
}

export interface GameState {
  status: GameStatus;
  difficulty: GameDifficulty;
  cards: GameCard[];
  selectedCards: GameCard[];
  pairedCards: string[];
  tries: number;
}

export interface GameCard {
  emoji: string;
  id: string;
}

export interface GameReduerAction {
  type: string;
  payload: unknown;
}
