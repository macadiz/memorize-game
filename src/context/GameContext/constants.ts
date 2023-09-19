import { GameContextState, GameDifficulty } from "./interfaces";

export const initialState: GameContextState = {
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
  pairedCards: [],
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
