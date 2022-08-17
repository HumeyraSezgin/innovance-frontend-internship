import React from "react";
import Board from "./components/board.js";
import Moves from "./components/move.js";
import Status from "./components/status.js";
import Game from "./components/game.js";

const App = () => {
    return (
        <Game>
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <Status />
                    <Moves />
                </div>
            </div>
        </Game>
    );
};

export default App;