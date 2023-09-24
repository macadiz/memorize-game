import { FC, useMemo } from "react";
import { useGame } from "../../context/GameContext";
import GameCard from "../../components/GameCard";
import "./MemorizeGame.css";
import WinnerModal from "../../components/WinnerModal";

const MemorizeGame: FC = () => {
  const { cards, selectedCards, pairedCards, setStatus } = useGame();

  const hasFinished = useMemo(
    () => pairedCards.length === cards.length / 2 && cards.length !== 0,
    [pairedCards, cards]
  );

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
      <WinnerModal isOpen={hasFinished} />
    </>
  );
};

export default MemorizeGame;
