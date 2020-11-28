import React from "react";
import { Link } from "react-router-dom";

import "./pokemon.css";

function extractIDFromURL(url) {
    const splitURL = url.split('/');
    const extractedID = splitURL[splitURL.length - 2];
    return extractedID;
}

function Pokemon(props) {
    const highestValidID = 809;
    const pokemonID = extractIDFromURL(props.pokemonURL);

    // Excludes the 8th generation
    if (pokemonID > highestValidID) {
        return null;
    } else {
        return(
            <Link className="card pt-2 mb-1 col-4 Pokemon-Card" to={"/pokemon-detail/" + pokemonID}>
                <div>
                    <p className="text-center lead text-capitalize Pokemon">{props.pokemonName}</p>
                </div>
            </Link>
        );
    }
}

export default Pokemon;
