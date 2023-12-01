import React, { useState, useEffect } from 'react'

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(data => setPokemon(data.results))
            .catch(error => console.error('Error', error))
    }, []);

    return (
        <div>
            <h1>Pokemon</h1>
                {pokemon.map(poke => (
                    <p key={poke.name}>{poke.name}</p>
                ))}
        </div>
    )
}

export default Pokemon