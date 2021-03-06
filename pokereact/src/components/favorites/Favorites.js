import React from 'react'
import PokeCard from '../home/pokeCard/PokeCard'
import { Layout } from '../layout/Layout'
import './Favorites.css'

function getFavoriteStorage () {
    let favoritePokemons = [];
    let pokemonId = Object.keys(localStorage);
    let totalIds = pokemonId.length;

    while( totalIds-- ){
        favoritePokemons.push(localStorage.getItem(pokemonId[totalIds]))
    }
    return favoritePokemons;
}

export const Favorites = () => {
    return (
        <Layout>
            <h1>Favorites</h1>
            <div className="row">
                {getFavoriteStorage().map( pokemon =><PokeCard key={pokemon} fromFavorites={"true"} pokemonName={pokemon}/>) }
            </div>
        </Layout>
    )
}
