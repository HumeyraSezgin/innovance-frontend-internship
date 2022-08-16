import React, { useState } from "react";
import calculateWinner from "../utils";
import Board from "./board";
import Moves from './moves'

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const nextPlayer = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = nextPlayer;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board squares={history[stepNumber]} onClick={handleClick} />
        </div>
        <div className="game-info">
          <h3>History</h3>
          <Moves
            history={history}
            setStepNumber={setStepNumber}
            setXisNext={setXisNext}
          />
          <h3>{winner ? "Winner: " + winner : "Next Player: " + nextPlayer}</h3>
        </div>
      </div>
    </>
  );
};

export default Game;