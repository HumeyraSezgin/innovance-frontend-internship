import React, { useContext } from 'react';
import { GameContext, useHandleClick, useHistory } from '../context/gameContext.js';
import Square from './square.js';

const Board = () => {
  const handleClick = useHandleClick();
  const history = useHistory();
  const { stepNumber } = useContext(GameContext);
  return (
    <>
      <div className="board">
        {history[stepNumber].map((square, i) => (
          <Square key={i} value={square} onClick={() => handleClick(i)} />
        ))}
      </div>
    </>
  )
};
export default Board;