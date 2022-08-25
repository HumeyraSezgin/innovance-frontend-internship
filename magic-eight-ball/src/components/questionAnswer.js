import React from 'react'

const questionAnswer = (item,question) => {
    return (
        <>
            <p>Your Question: {question}</p>
            <div>
                <p>Answer: {item.answer}</p>
                <img src={item.image} alt="yes-no-img" />
            </div>
            
        </>
    )
}

export default questionAnswer