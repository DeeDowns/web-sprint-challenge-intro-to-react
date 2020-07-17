// Write your Character component here
import React from 'react';
import styled, {keyframes }from 'styled-components';

const kf = keyframes`
 0% {
  transform: scale(0);
  opacity: 0;
}

100% {
  transform: scale(1);
  opacity: 1;
}
   

`

const StyledCharacters = styled.div `
    h2 {
        color: white;
        transform: scale(0);
        animation: ${kf} 1s ease-in-out forwards;
    }

    


`

const CharactersList = props => {
    const { characterData, key } = props
    console.log(props)

    

    return (
        <StyledCharacters>
            {
                characterData.map(character=> {
                   return <h2>{character.name} </h2>
                })
            }
        </StyledCharacters>
    )
}

export default CharactersList;