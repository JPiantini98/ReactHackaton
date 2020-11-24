import React from "react";
import "./pokemon.css";

function Pokemon(props) {
    return(
        <div className="card pt-2 mb-1 col-4 Pokemon-Card">
            <p className="text-center lead Pokemon">{props.pokemonName[0].toUpperCase() + props.pokemonName.substring(1)}</p>
        </div>
    );
}

export default Pokemon;
