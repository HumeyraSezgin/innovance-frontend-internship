import React, { useContext } from "react";
import calculateWinner from "../utils/util";
import Board from "./board";
import Moves from './moves'
import { GameContext, useHistory } from "../context/gameContext";

const Game = () => {
  const history = useHistory();
  const { stepNumber, xIsNext } = useContext(GameContext);
  const winner = calculateWinner(history[stepNumber]);
  const nextPlayer = xIsNext ? "X" : "O";
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <h3>History</h3>
        <Moves />
        <h3>{winner ? "Winner: " + winner : "Next Player: " + nextPlayer}</h3>
      </div>
    </div>
  );
};

export default Game;