import React from 'react';
import Favorite from '../Favorite/FavoritePokemon';
import './PokemonProfile.css'


const PokemonProfile = (props) =>{
    return(
        <div className="col-sm">
            <Favorite id = {props.id} name = {props.name}/>
            <img className = "img-fluid" src={props.image} alt="pokemon"/>
            <ul id="pkmType" className="text-center text-capitalize font-weight-bold" >{props.types}</ul>
        </div>
    )
}

export default PokemonProfile;