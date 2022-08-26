import React from 'react';
import {P} from "../style";

type questionAnswerProps = {
    item: any;
    question: string;
}

function questionAnswer ({item,question}: questionAnswerProps) {
    return (
        <>
            <P>Your Question: {question}</P>
            <div>
                <P>Answer: {item.answer}</P>
                <img src={item.image} alt="yes-no-img" />
            </div>
        </>
    )
}

export default questionAnswer;