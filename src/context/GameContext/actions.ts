import { availableEmojis, diffcultyMap } from "./constants";
import { GameCard, GameDifficulty } from "./interfaces";
import { shuffle } from "../../utils/array";
import { v4 as uuid } from "uuid";

export const generatePlayableCards = (
  difficulty: GameDifficulty
): GameCard[] => {
  const emojiNumber = diffcultyMap[difficulty];

  const shuffledArray = shuffle(availableEmojis);

  const selectedArray = shuffledArray.slice(0, emojiNumber);

  const dupedArray = [...selectedArray, ...selectedArray];

  const shuffledDupedArray = shuffle(dupedArray);

  return shuffledDupedArray.map((emoji) => {
    return { emoji, id: uuid() } as GameCard;
  });
};
