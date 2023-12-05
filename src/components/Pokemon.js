import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => setPokemon(response.data.results))
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