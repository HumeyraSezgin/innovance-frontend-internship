import React, { useContext } from 'react';
import { GameContext, usePlayATurn, useHistory } from '../context/gameContext.js';
import Square from './square.js';

const Board = () => {
  const playATurn = usePlayATurn();
  const history = useHistory();
  const { stepNumber } = useContext(GameContext);
  return (
    <div className="board">
      {history[stepNumber].map((square, i) => (
        <Square key={i} value={square} onClick={() => playATurn(i)} />
      ))}
    </div>
  )
};
export default Board;