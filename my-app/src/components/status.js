import React, { useContext } from 'react';
import { GameContext } from "./game.js";

const Status = () => {
    const { winner, games } = useContext(GameContext);
    let status = winner ? "Winner: " + winner : "Next Player: " + games.xIsNext ? "X" : "O";
    return (
        <div>{status}</div>
    );
};

export default Status;