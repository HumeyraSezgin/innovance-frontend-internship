import React, { useState,ChangeEvent } from "react";
import questionAnswer from './components/questionAnswer'
import {Title,Button,Body,H2,Input,P} from "./style"

const API_ENDPOINT = 'https://yesno.wtf/api';

function App() {
  const [question, setQuestion] = useState<string>("");
  const [item, setItem] = useState<any>("");
  const [error, setError] = useState<Boolean>(false);
  const [isLoaded, setIsLoaded] = useState<Boolean>(false);

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setQuestion(event.target.value);
  }

  async function fetchApi() {
    let response = await fetch(API_ENDPOINT);
    let responseData = await response.json();
    setItem(responseData);
    console.log("----------------------")
    console.log(typeof(responseData))
  };

  function handleSubmit(event: React.SyntheticEvent) {
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
        <H2>Ask your question?</H2>
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
            <P>You didn't ask a question</P> : null
          }
          {isLoaded ?
            <>
              {questionAnswer({item,question})}
            </> : null
          }
        </form>
      </div>
    </Body>
  );
}

export default App;