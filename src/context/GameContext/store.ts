import { stateActions } from "./constants";
import {
  GameCard,
  GameDifficulty,
  GameReduerAction,
  GameState,
  GameStatus,
} from "./interfaces";

const {
  SET_GAME_CARDS,
  SET_GAME_DIFFICULTY,
  SET_GAME_STATUS,
  SET_PAIRED_CARDS,
  SET_SELECTED_CARDS,
  SET_TRIES,
} = stateActions;

export const gameStateReducer = (
  state: GameState,
  action: GameReduerAction
): GameState => {
  switch (action.type) {
    case SET_GAME_STATUS: {
      return {
        ...state,
        status: action.payload as GameStatus,
      };
    }
    case SET_GAME_CARDS: {
      return {
        ...state,
        cards: action.payload as GameCard[],
      };
    }
    case SET_SELECTED_CARDS: {
      return {
        ...state,
        selectedCards: action.payload as GameCard[],
      };
    }
    case SET_PAIRED_CARDS: {
      return {
        ...state,
        pairedCards: action.payload as string[],
      };
    }
    case SET_TRIES: {
      return {
        ...state,
        tries: action.payload as number,
      };
    }
    case SET_GAME_DIFFICULTY: {
      return {
        ...state,
        difficulty: action.payload as GameDifficulty,
      };
    }
    default: {
      return state;
    }
  }
};
