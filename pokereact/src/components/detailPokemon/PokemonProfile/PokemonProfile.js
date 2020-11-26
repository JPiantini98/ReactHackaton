import React from 'react';
import './PokemonProfile.css'

const PokemonProfile = (props) =>{
    return(
        <div class="col-sm">
            <img class = "img-fluid" src={props.image} alt="pokemon"/>
            <ul id="pkmType" class="text-center text-capitalize font-weight-bold" >{props.types}</ul>
        </div>
    )
}

export default PokemonProfile;