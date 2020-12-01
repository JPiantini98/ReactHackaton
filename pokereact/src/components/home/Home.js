import React, { useEffect } from 'react'
import { useState } from 'react'

import './homeStyle.css'
import './pokeCard/pokeCard.css'
import PokeCard from './pokeCard/PokeCard'

export const Home = () => {
    return (
        <div>
            <h1 className="ml-4"> Home </h1>
            <div className="row box">
                <PokeCard pokemonName="bulbasaur" />
                <PokeCard pokemonName="rattata" />
                <PokeCard pokemonName="charizard" />
                <PokeCard pokemonName="pikachu" />
                <PokeCard pokemonName="caterpie" />
                <PokeCard pokemonName="gastly" />
                <PokeCard pokemonName="dewgong" />
                <PokeCard pokemonName="spheal" />
                <PokeCard pokemonName="machop" />
                <PokeCard pokemonName="tornadus-incarnate" />
                <PokeCard pokemonName="ekans" />
                <PokeCard pokemonName="sandshrew" />
                <PokeCard pokemonName="geodude" />
                <PokeCard pokemonName="steelix" />
                <PokeCard pokemonName="abra" />
                <PokeCard pokemonName="dratini" />
                <PokeCard pokemonName="umbreon" />
                <PokeCard pokemonName="clefairy" />
            </div>
        </div>
    );
}
