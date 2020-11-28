import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import "./perType.css";
import PokemonList from "./pokemonList/pokemonList.js";
import MoveList from "./moveList/moveList.js";
import Menu from "./menu/menu.js";
import DamageRelations from "./damageRelations/damageRelations";

// Custom hook for getting previous value 
function usePrevious(value) {
    const ref = useRef();

    useEffect(() => {
      ref.current = value;
    });

    return ref.current;
}

// Function for making sure that the value passed to URL will be an integer
function isInt(value) {
    return !isNaN(value) && 
           parseInt(Number(value)) == value && 
           !isNaN(parseInt(value, 10));
}

// PerType Component
function PerType(props) {
    //#region States
    const [perTypeState, setPerTypeState] = useState({
        pokemonList: null,
        moveList: null,
        previousTypeName: null,
        typeNameForClassList: null,
        damageRelations: null
    });

    const [toggleMovesState, setToggleMovesState ] = useState({
        toggleMoves: false 
    });

    const [redirectState, setRedirectState] = useState({
       redirect: null 
    });
    //#endregion States

    //#region HTTP Request / API Call
    // Get previous typeName value from the old state
    const previousTypeName = usePrevious(perTypeState.previousTypeName);
    const highestValidID = 18;
    

    // Make an HTTP request to the API on re-render
    useEffect(() => {
        if (props.match.params.typeName) {

            const typeID = props.match.params.typeName;

            // Prevents invalid URLs if the ID param isn't an integer or outside of a certain range
            if ( !redirectState.redirect && (!isInt(typeID) || ( 0 >= +typeID || +typeID > highestValidID ))) {
                setRedirectState({
                    redirect: <Redirect to="/home"/>
                }); 
            // Otherwise, make the API call if it is the first time or if a new type has been targetted
            } else if (!redirectState.redirect && (!perTypeState.pokemonList || (previousTypeName && previousTypeName !== +typeID))) { 
                axios.get(`https://pokeapi.co/api/v2/type/${typeID}/`).then((response) => {
                    setPerTypeState({
                        pokemonList: response.data.pokemon,
                        moveList: response.data.moves,
                        previousTypeName: response.data.id,
                        typeNameForClassList: response.data.name,
                        damageRelations: response.data.damage_relations
                    });
                });
            }
        }

        //Cleanup
        return () => {

            if (redirectState.redirect) {
                setRedirectState({redirect: null});
            }
        }
    });
    //#endregion HTTP Request / API Call

    //#region Event handlers
    function pokemonButtonClickHandler() {
        setToggleMovesState({
            toggleMoves: false
        });
    }

    function movesButtonClickHandler() {
        setToggleMovesState({
            toggleMoves: true
        });
    }
    //#endregion Event handlers

    //#region CSS Classes
    let divClassList = ["container", "pt-5", perTypeState.typeNameForClassList].join(' ');
    //#endregion CSS Classes
    
    return(
        <div className={divClassList}>
            {redirectState.redirect}
            <DamageRelations damageRelationsObject={perTypeState.damageRelations} typeName={perTypeState.typeNameForClassList} />
            
            <div className="container">
                <h1 className="display-4 text-center title">{!toggleMovesState.toggleMoves ? "Pokémon" : "Moves"}</h1>

                {!toggleMovesState.toggleMoves ? 
                <PokemonList listOfPokemonFromState={perTypeState.pokemonList} /> :
                <MoveList listOfMovesFromState={perTypeState.moveList} /> 
                }
            </div>
            
            <Menu pokemonButtonClickHandler={pokemonButtonClickHandler} movesButtonClickHandler={movesButtonClickHandler} />
        </div>
    );
}

export default PerType;