import React, { useContext } from 'react';
import Square from './square.js';
import { GameContext } from './game.js';

const Board = () => {
  const { current, handleClick } = useContext(GameContext);
  return (
    <div className="board">
      {current.squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => handleClick(i)} />
      ))}
    </div>
  );
};
export default Board;
