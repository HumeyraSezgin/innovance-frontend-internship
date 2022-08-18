import React from 'react';

const Moves = ({ history, setXisNext, setStepNumber }) => {
    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    return (
        <ol>
            {history.map((_step, index) => (
                <li>
                    <button onClick={() => jumpTo(index)}>
                        {index ? `Go to move # ${index}` : `Go to game start`}
                    </button>
                </li>
            ))}
        </ol>
    )
}
export default Moves;