// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacters = styled.div `
    h2 {
        color: white;
    }


`

const CharactersList = props => {
    const { characterData } = props
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