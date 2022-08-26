import React from 'react';
import {P} from "../style";

export type AnswerResponse = {
    answer: string;
    forced: boolean;
    image: string;
}

type QuestionAnswerProps = {
    item: AnswerResponse;
    question: string;
}

const QuestionAnswer =({item,question}: QuestionAnswerProps)=> {
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

export default QuestionAnswer;