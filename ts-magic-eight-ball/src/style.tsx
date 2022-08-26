import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #588c7e
`;

export const Button = styled.button`
    font-size: 2em;
    text-align: center;
    color: white;
    background-color: #588c7e;
    border: solid #588c7e;
    margin: 0.5em;
    width: 150px;
    &:active{
        color: #588c7e;
        background-color: white;
    }
`;

export const Body = styled.body`
    margin-top: 5em;
    text-align: center;
    border-left: 2px #563f46;
    border-right: 2px #563f46;
`;

export const H2 = styled.h2`
    font-size: 2em;
    color: #c1502e;
`;

export const Input = styled.input`
    color: #588c7e;
    width: 340px;
    height: 30px;
    text-align: center;
`;

export const P = styled.p`
    color: #c1502e;
    font-weight: bold;
    font-family: Courier New;
`;
