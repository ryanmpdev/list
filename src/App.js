import React, { useState } from 'react'
import styled from "styled-components";

export const Container = styled.div`
    background-color:#616163 ;
    width:80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 98vh;
    border-radius: 20px;

    h1{
    color: aliceblue;
    font-size: 40px;
    }
form {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 40px;

}

input {
    width: 40%;
    outline: none;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 18px;
    background-color: #9ED2C6;
  }

  button {
    width: 90px;
    outline: none;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 18px;
    margin-left: 3%;
    cursor: pointer;
}

button:hover {
   background-color: aqua;
}

   li {
    color: azure;
    font-size: 30px;
    width: 80%;
   }

   button {
    width: 150px;
    outline: none;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
}

button:hover {
   background-color: aqua;
}
`

export default function App() {
  const [input, setInput] = useState();
  const [list, setList] = useState([]);


const add = () =>{
  let coisasDoInput ={
    value: input,
    id: Date.now(),
    status: false,
  }
  setList([...list, coisasDoInput])
  setInput("")
}

function DeleteTask(RastreadorDessaFuncao){
  const ListaFiltrada = list.filter(item => item.id !== RastreadorDessaFuncao)
  setList(ListaFiltrada)
}

  return (
    <Container>
    
      <h1>Metas do dia</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input value={input} onChange={(e) => { setInput(e.target.value)}}/>

        <button onClick={() =>{add()}}>+</button>
      </form>
      <ul>
        {list.map((item) => (
          <li>
           {item.value}
           <button onClick={() =>{DeleteTask(item.id)}}>Delete</button>
          </li>
        ))}
      </ul>
    </Container>
  )
}
