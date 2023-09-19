import {
  availableEmojis,
  diffcultyMap,
} from "../../context/GameContext/constants";
import { GameCard, GameDifficulty } from "../../context/GameContext/interfaces";
import { shuffle } from "../../utils/array";
import { v4 as uuid } from "uuid";

export const generatePlayableCards = (
  diffuclty: GameDifficulty
): GameCard[] => {
  const emojiNumber = diffcultyMap[diffuclty];

  const shuffledArray = shuffle(availableEmojis);

  const selectedArray = shuffledArray.slice(0, emojiNumber);

  const dupedArray = [...selectedArray, ...selectedArray];

  const shuffledDupedArray = shuffle(dupedArray);

  return shuffledDupedArray.map((emoji) => {
    return { emoji, id: uuid() } as GameCard;
  });
};
