import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const API_ENDPOINT = 'https://yesno.wtf/api';

function App() {
  const [question, setQuestion] = useState("");
  const [item, setItem] = useState("");
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  function handleOnChange(event) {
    setQuestion(event.target.value);
  }

  function submitting() {
    if (question.endsWith('?')) {
      setIsLoaded(true);
      setError(false);
      setQuestion(question);
      fetch(API_ENDPOINT).then((res) => res.json()).then((data) => setItem(data))
    }
    else {
      setError(true);
      isLoaded(false);
    }
  }

  return (
    <div className="App">
      <h1>Magic Eight Ball</h1>
      <h2>Ask your question?</h2>
      <input
        type="text"
        name="name"
        onChange={handleOnChange}
        value={question}
      />
      <button type="submit" onClick={submitting}>Submit</button>
      {error ?
        <p>You didn't ask a question</p> : null
      }
      {isLoaded ?
        <>
          <div>{item.answer}</div>
          <img src={item.image} alt="yes-no-img" />
        </> : null
      }
    </div>
  );


}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);