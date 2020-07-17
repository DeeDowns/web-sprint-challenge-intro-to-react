import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CharactersList from './components/CharactersList';
import styled from 'styled-components';

const StyledApp = styled.div `
  background-image: url('https://images.unsplash.com/photo-1542228846-2d791a09d7d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');

`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      // console.log(res.data.results)
      setCharacterData(res.data.results)
      
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

console.log('chararcter array', characterData[0])

  return (
    <StyledApp className="App">
      <h1 className="Header">Characters</h1>
     <CharactersList characterData={characterData}/>
    </StyledApp>
  );

}

export default App;
