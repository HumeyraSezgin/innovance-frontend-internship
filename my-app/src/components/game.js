import React, { useState } from "react";
import calculateWinner from "../utils";
import Board from "./board";
import moves from './moves'

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const nextChar = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = nextChar;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board squares={history[stepNumber]} onClick={handleClick} />
        </div>
        <div className="game-info">
          <h3>History</h3>
          {moves()}
          <h3>{winner ? "Winner: " + winner : "Next Player: " + nextChar}</h3>
        </div>
      </div>
    </>
  );
};

export default Game;