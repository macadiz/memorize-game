import { FC } from "react";
import { useGame } from "../../context/GameContext";
import GameCard from "../../components/GameCard";
import "./MemorizeGame.css";

const MemorizeGame: FC = () => {
  const { cards, selectedCards, pairedCards, setStatus } = useGame();

  const onBackClick = () => {
    setStatus("Menu");
  };

  return (
    <>
      <button className="back-button" onClick={onBackClick}>
        Back
      </button>
      <div className="memorize-game-cards-grid">
        {cards.map((card) => {
          return (
            <GameCard
              key={card.id}
              emojiCard={card}
              isSelected={
                selectedCards.includes(card) || pairedCards.includes(card.emoji)
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default MemorizeGame;
