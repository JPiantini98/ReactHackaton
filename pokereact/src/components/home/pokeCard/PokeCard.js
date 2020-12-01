import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import './pokeCard.css';

function extractIDFromURL(url) {
    const splitURL = url.split('/');
    const extractedID = splitURL[splitURL.length - 2];
    return extractedID;
}

function PokeCard(props) {
    const [pokemonData, setPokemonData] = useState({
        images: null,
        id: null,
        types: null,
        abilities: null
    });

    useEffect(() => {
        if (!pokemonData.abilities) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokemonName}`).then(response => {
                setPokemonData({
                    types: response.data.types,
                    images: response.data.sprites.other['official-artwork'].front_default,
                    id: response.data.id,
                    name: response.data.name,
                    abilities: response.data.abilities,
                });
            });
        }
    });

    let pokemonTypes;
    if (pokemonData.types) {
        pokemonTypes = pokemonData.types.map((element) => {
            return pokemonTypes = element.type;
        });
    }

    let typeName = pokemonTypes ? pokemonTypes[0].name : null;
    let typeID = pokemonTypes ? extractIDFromURL(pokemonTypes[0].url) : null;

    return (
        <div key={pokemonData.id} className="text-center col-12 col-sm-6 col-md-4 pt-3">
            {props.fromFavorites ?

                <Link style={{ textDecoration: 'none' }} to={"/pokemon-detail/" + pokemonData.id}>
                    <div id={typeName}>
                        <img src={pokemonData.images} className="img"></img>
                        <h5 id={typeName} className="text-capitalize pokeCard">{pokemonData.name}</h5>
                    </div>
                </Link>

                :

                <Link style={{ textDecoration: 'none' }} to={"/per-type/" + typeID}>
                    <div id={typeName}>
                        <img src={pokemonData.images} className="img"></img>
                        <h5 id={typeName} className="text-capitalize pokeCard">{typeName}</h5>
                    </div>
                </Link>
            }
        </div>
    );
}

export default PokeCard
