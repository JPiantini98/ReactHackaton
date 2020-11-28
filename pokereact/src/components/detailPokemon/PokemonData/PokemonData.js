import React from 'react';
import './PokemonData.css'

const PokemonData = (props) => {
    return(
        <div className = "col-sm" >
            <h2 id="pkmName" className= "text-capitalize">{'#'+props.id + ' ' + props.name}</h2>
            <div id="dataContent">
                <h5>Height: {props.height}</h5>
                <h5>Weight: {props.weight}</h5>
                <h5>Abilites: </h5>
                <ul className="text-capitalize">{props.abilities}</ul>
            </div>
            <h5 id="attacksTitle">Attacks List: </h5>
            <ul id = "pkmAttacks">{props.attacks}</ul>
        </div>
    );
}

export default PokemonData;