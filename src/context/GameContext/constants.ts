import { GameContextValue, GameDifficulty, GameState } from "./interfaces";

export const initialContextValue: GameContextValue = {
  status: "Menu",
  setStatus: () => {
    return;
  },
  cards: [],
  setCards: () => {
    return;
  },
  selectedCards: [],
  setSelectedCard: () => {
    return;
  },
  startGame: () => {
    return;
  },
  pairedCards: [],
  tries: 0,
  difficulty: "Easy",
};

export const initialGameState: GameState = {
  status: "Menu",
  cards: [],
  selectedCards: [],
  pairedCards: [],
  tries: 0,
  difficulty: "Easy",
};

export const availableEmojis = [
  "😀",
  "😺",
  "💀",
  "🐵",
  "🐼",
  "🍎",
  "🥐",
  "⚽️",
  "✈️",
  "❤️",
  "💯",
  "🍙",
];

export const diffcultyMap: Record<GameDifficulty, number> = {
  Easy: 6,
  Medium: 8,
  Hard: 12,
};

export const stateActions = {
  SET_GAME_STATUS: "SET_GAME_STATUS",
  SET_GAME_CARDS: "SET_GAME_CARDS",
  SET_SELECTED_CARDS: "SET_SELECTED_CARDS",
  SET_PAIRED_CARDS: "SET_PAIRED_CARDS",
  SET_TRIES: "SET_TRIES",
  SET_GAME_DIFFICULTY: "SET_GAME_DIFFICULTY",
};
