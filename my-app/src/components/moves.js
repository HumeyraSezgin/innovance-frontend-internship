import React from 'react';

const moves = (history, jumpTo) =>
    history.map((_step, move) => {
        const destination = move ? `Go to move #${move}` : "Go to Start";
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{destination}</button>
            </li>
        );
    });

export default moves;
