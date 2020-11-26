import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from './PokemonProfile/PokemonProfile';
import PokemonData from './PokemonData/PokemonData';
import '../perType/perType.css';

export default function DetailPokemon() {
    //Variable to store the wanted pokemon (this is just temporary)
    //to get a different pokemon change the pkmName string or use a number
    let pkmName = "pikachu";

    //Constructor to store the data from the api
    const [pokemonData, setPokemonData] = useState({
        image: null,
        id: null,
        name: null,
        types: null,
        height: null,
        weight: null,
        abilities: null,
        moves: null,
    })

    //Make an HTTP request  to the API to get the selected data
    useEffect(() =>{

        if(!pokemonData.abilities){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmName}`).then(response =>{
            console.log(response);
            setPokemonData({
                image: response.data.sprites.other['official-artwork'].front_default,
                id: response.data.id,
                name: response.data.name,
                types: response.data.types,
                height: response.data.height,
                weight: response.data.weight,
                abilities: response.data.abilities,
                moves: response.data.moves
            })
        })
        }
        
    })

    //Helpers conditions to access the wanted data from the api
    let pkmTypes;
    if(pokemonData.types){
        pkmTypes = pokemonData.types.map((element) => {
            return <li class={element.type.name} key={element.type.name} >{element.type.name}</li>
        });
    }

    let pkmAbilities;
    if(pokemonData.abilities){
        pkmAbilities = pokemonData.abilities.map((element) =>{
            return <li key={element.ability.name}>{element.ability.name}</li>
        });
    }

    let pkmAttack;
    if(pokemonData.moves){
        pkmAttack = pokemonData.moves.map((element) => {
            return <li class = "list-group-item text-capitalize" key={element.move.name} >{element.move.name}</li>
        });
    }

    //Rendering variables
    return(
        <div class="row mx-auto">
            <Profile image={pokemonData.image} types={pkmTypes}/>

            <PokemonData 
                id = {pokemonData.id}
                name = {pokemonData.name}
                height = {pokemonData.height}
                weight = {pokemonData.weight}
                abilities = {pkmAbilities}
                attacks = {pkmAttack}
            />

        </div>
    );
}
