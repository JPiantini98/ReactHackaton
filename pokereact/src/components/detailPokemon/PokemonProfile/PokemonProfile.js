import React from 'react';
import './PokemonProfile.css'

const PokemonProfile = (props) =>{
    return(
        <div class="col-sm" align="center">
            <img class = "img-fluid" src={props.image} alt="responsive pokemon img"/>
            <ul id="pkmType" class="text-center text-capitalize font-weight-bold" >{props.types}</ul>
        </div>
    )
}

export default PokemonProfile;