import React, { useState, createContext, useContext } from "react";
import calculateWinner from "../utils/util";
export const GameContext = createContext();

export function GameProvider({ children }) {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const contextValue = {
        history, setHistory, stepNumber, setStepNumber, xIsNext, setXisNext
    };
    return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
};

export const useHandleClick = () => {
    const context = useContext(GameContext);
    if (context === undefined) {
        throw new Error('useCount must be used within a GameProvider')
    };
    const { xIsNext, stepNumber, history, setHistory, setStepNumber, setXisNext } = context;
    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        const winner = calculateWinner(history[stepNumber]);
        if (winner || squares[i]) return;
        squares[i] = xIsNext ? "X" : "O";;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    };
    return handleClick;
}

export const useHistory = () => {
    const context = useContext(GameContext);
    if (context === undefined) {
        throw new Error('useCount must be used within a GameProvider')
    };
    return context.history;
};