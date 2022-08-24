import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import questionAnswer from './components/questionAnswer'
const API_ENDPOINT = 'https://yesno.wtf/api';

function App() {
  const [question, setQuestion] = useState("");
  const [item, setItem] = useState("");
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  function handleOnChange(event) {
    setQuestion(event.target.value);
  }

  async function fetchApi() {
    let response = await fetch(API_ENDPOINT);
    let responseData = await response.json();
    setItem(responseData);
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (question.endsWith('?')) {
      setIsLoaded(true);
      setError(false);
      setQuestion(question);
      fetchApi();
    }
    else {
      setError(true);
      setIsLoaded(false);
    }
  }

  return (
    <div className="App">
      <h1>Magic Eight Ball</h1>
      <h2>Ask your question?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleOnChange}
          value={question}
        />
        <button type="submit">Submit</button>
        {error ?
          <p>You didn't ask a question</p> : null
        }
        {isLoaded ?
          <>
            {questionAnswer(item,question)}
          </> : null
        }
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);