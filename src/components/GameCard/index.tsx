import { FC } from "react";
import { GameCardProps } from "./interfaces";
import classNames from "classnames";

import "./GameCard.css";
import { useGame } from "../../context/GameContext";

const GameCard: FC<GameCardProps> = ({ emojiCard, isSelected }) => {
  const { setSelectedCard } = useGame();

  const cardClasses = classNames("flip-card", {
    selected: isSelected,
  });

  return (
    <div
      className={cardClasses}
      onClick={() => !isSelected && setSelectedCard(emojiCard)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">♠️</div>
        <div className="flip-card-back">{isSelected && emojiCard.emoji}</div>
      </div>
    </div>
  );
};

export default GameCard;
