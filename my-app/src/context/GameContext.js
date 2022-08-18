import React, { createContext } from "react";

export const GameContext = createContext();

export function GameProvider({ children, value }) {
    return <GameContext.Provider value={value}>{children}</GameContext.Provider>
};
