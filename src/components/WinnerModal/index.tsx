import { FC } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { useGame } from "../../context/GameContext";
import { WinnerModalProps } from "./interfaces";

import "./WinnerModal.css";

const WinnerModal: FC<WinnerModalProps> = ({ isOpen }) => {
  const { tries, difficulty, startGame, setStatus } = useGame();

  const modalBackgropClasses = classNames("modal-backdrop", {
    open: isOpen,
  });

  return createPortal(
    <div className={modalBackgropClasses}>
      <div className="modal-dialog">
        <h3>🎉 Congratulations 🎉</h3>
        <p>You won in {tries} tries</p>
        <button className="primary" onClick={() => setStatus("Menu")}>
          Go back to the menu
        </button>
        <button className="primary" onClick={() => startGame(difficulty)}>
          Try again
        </button>
      </div>
    </div>,
    document.body
  );
};

export default WinnerModal;
