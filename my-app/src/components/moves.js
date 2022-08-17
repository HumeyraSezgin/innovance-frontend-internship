import React, { useContext } from 'react';
import { GameContext } from "./game";

const Moves = () => {
    const { updateHistory, dispatch } = useContext(GameContext);
    const jumpTo = (step) => {
        dispatch({ type: "CHANGE_STEP_NUMBER", payload: step })
        dispatch({ type: "CHANGE_X_IS_NEXT", payload: step % 2 === 0 });
    };
    return (
        <ol>
            {updateHistory.map((_step, index) => (
                <li>
                    <button onClick={() => jumpTo(index)}>
                        {index ? `Go to move # ${index}` : `Go to game start`}
                    </button>
                </li>
            ))}
        </ol>
    );

}
export default Moves;
