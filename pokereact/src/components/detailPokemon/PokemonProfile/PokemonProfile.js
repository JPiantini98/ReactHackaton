import React from 'react';
import './PokemonProfile.css'

const PokemonProfile = (props) =>{
    return(
        <div className="col-sm">
            <img className = "img-fluid" src={props.image} alt="pokemon"/>
            <ul id="pkmType" className="text-center text-capitalize font-weight-bold" >{props.types}</ul>
        </div>
    )
}

export default PokemonProfile;