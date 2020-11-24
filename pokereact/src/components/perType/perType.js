import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
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

// PerType Component
function PerType(props) {

    //#region States
    const [perTypeState, setPerTypeState] = useState({
        pokemonList: null,
        moveList: null,
        previousTypeName: null,
        typeNameForClassList: null, // Was needed to change CSS class from event handler without triggering useEffect() 
        damageRelations: null
    });

    const [toggleMovesState, setToggleMovesState ] = useState({
        toggleMoves: false 
    });
    //#endregion States

    //#region HTTP Request / API Call
    // Get previous typeName value from the old state
    const previousTypeName = usePrevious(perTypeState.previousTypeName);

    // Make an HTTP request to the API on re-render
    useEffect(() => {
        if (props.typeName) {

            // If it is the first time or if a new type has been targetted
            if (!perTypeState.pokemonList || (perTypeState.previousTypeName && previousTypeName !== props.typeName)) {

                axios.get(`https://pokeapi.co/api/v2/type/${props.typeName}/`).then((response) => {
                    setPerTypeState({
                        pokemonList: response.data.pokemon,
                        moveList: response.data.moves,
                        previousTypeName: props.typeName,
                        typeNameForClassList: props.typeName,
                        damageRelations: response.data.damage_relations
                    });
                });
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

    function typeBadgeClickHandler(type) {
        axios.get(`https://pokeapi.co/api/v2/type/${type}/`).then((response) => {
            setPerTypeState({
                pokemonList: response.data.pokemon,
                moveList: response.data.moves,
                previousTypeName: previousTypeName,
                typeNameForClassList: type,
                damageRelations: response.data.damage_relations
            });
        });
    }
    //#endregion Event handlers

    //#region CSS Classes
    let divClassList = ["container", "pt-5", perTypeState.typeNameForClassList].join(' ');
    //#endregion CSS Classes

    return(
        <div className={divClassList}>

            <DamageRelations damageRelationsObject={perTypeState.damageRelations} typeName={perTypeState.typeNameForClassList} typeBadgeClickHandler={typeBadgeClickHandler}/>

            <div class="container">
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