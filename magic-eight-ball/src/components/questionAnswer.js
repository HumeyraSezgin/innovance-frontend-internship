import React from 'react'
import {Result} from "../style";
const questionAnswer = (item,question) => {
    return (
        <>
            <Result>Your Question: {question}</Result>
            <div>
                <Result>Answer: {item.answer}</Result>
                <img src={item.image} alt="yes-no-img" />
            </div>
            
        </>
    )
}

export default questionAnswer