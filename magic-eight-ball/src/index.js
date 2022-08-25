import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import questionAnswer from './components/questionAnswer'
import {Title,Button,Body,AboutInput,Input,Result} from "./style"

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
    <Body>
      <div className="App">
        <Title>Magic Eight Ball</Title>
        <AboutInput>Ask your question?</AboutInput>
        <form onSubmit={handleSubmit}>
          <div >
            <Input
            type="text"
            name="name"
            onChange={handleOnChange}
            value={question}
            />
          </div>
          <div>
            <Button type="submit">Ask</Button>
          </div>
          {error ?
            <Result>You didn't ask a question</Result> : null
          }
          {isLoaded ?
            <>
              {questionAnswer(item,question)}
            </> : null
          }
        </form>
      </div>
    </Body>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);