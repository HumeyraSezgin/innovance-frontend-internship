import React, { useReducer } from "react";
import calculateWinner from "../utils";
import gameReducer from "../gameReducer";

export const GameContext = React.createContext();

const Game = (props) => {
  const initialData = {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true,
  };
  const [games, dispatch] = useReducer(gameReducer, initialData);
  const nextPlayer = games.xIsNext ? "X" : "O";
  const updateHistory = games.history;
  const current = updateHistory[updateHistory.length - 1];
  const winner = calculateWinner(current.squares);

  const handleClick = (i) => {
    const historyPoint = games.history.slice(0, games.stepNumber + 1);
    const current = historyPoint[games.stepNumber];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = nextPlayer;
    dispatch({ type: "ADD_HISTORY", payload: historyPoint.concat([{ squares: squares }]) });
    dispatch({ type: "CHANGE_STEP_NUMBER", payload: historyPoint.length });
    dispatch({ type: "CHANGE_X_IS_NEXT", payload: !games.xIsNext });
  };

  return (
    <GameContext.Provider value={{ winner, games, updateHistory, current, handleClick, dispatch }}>
      {props.children}
    </GameContext.Provider>
  );
};

export default Game;