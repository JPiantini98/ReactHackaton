import React from "react";
import "./pokemon.css";

function Pokemon(props) {
    return(
        <p className="Pokemon">{props.pokemonName}</p>
    );
}

export default Pokemon;