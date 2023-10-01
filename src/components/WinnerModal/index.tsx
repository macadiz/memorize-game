import { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { useGame } from "../../context/GameContext";
import { WinnerModalProps } from "./interfaces";

import "./WinnerModal.css";

const WinnerModal: FC<WinnerModalProps> = ({ isOpen }) => {
  const { status, tries, difficulty, startGame, setStatus } = useGame();

  const modalContainerClasses = classNames("modal-container", {
    open: isOpen,
  });

  const addBodyOpenModal = () => {
    document.body.classList.add("modal-open");
  };

  const removeBodyOpenModal = () => {
    document.body.classList.remove("modal-open");
  };

  useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      addBodyOpenModal();
    } else {
      removeBodyOpenModal();
    }
  }, [isOpen, status]);

  return createPortal(
    <div className={modalContainerClasses}>
      <div className="modal-backdrop"></div>
      <div className="modal-dialog">
        <h3 className="congratulations-title">🎉 Congratulations 🎉</h3>
        <p>You won in {tries} tries</p>
        <button
          className="primary"
          onClick={() => {
            setStatus("Menu");
            removeBodyOpenModal();
          }}
        >
          Go back to the menu
        </button>
        <button
          className="primary"
          onClick={() => {
            startGame(difficulty);
            removeBodyOpenModal();
          }}
        >
          Try again
        </button>
      </div>
    </div>,
    document.body
  );
};

export default WinnerModal;
