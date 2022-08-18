import React from "react";
import Game from "./components/game.js";
import { GameProvider } from "./context/gameContext.js";
const App = () => {
    return (
        <>
            <GameProvider>
                <Game />
            </GameProvider>
        </>
    );
};

export default App;