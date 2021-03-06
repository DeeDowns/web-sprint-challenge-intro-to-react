import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CharactersList from './components/CharactersList';
import styled from 'styled-components';



const StyledApp = styled.div `
 

  h1 {
    color: yellow;
  }

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


  return (
    <StyledApp className="App">
      <h1 className="Header">Star Wars Characters</h1>
     <CharactersList characterData={characterData}/>
    </StyledApp>
  );

}

export default App;
