import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./perType.css";
import Pokemon from "./pokemon/pokemon.js";
import Move from "./move/move.js";
import Menu from "./menu/menu.js";
import DamageRelations from "./damageRelations/damageRelations";

// custom hook for getting previous value 
function usePrevious(value) {
    const ref = useRef();

    useEffect(() => {
      ref.current = value;
    });

    return ref.current;
  }

// PerType Component
function PerType(props) {

    // States
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


    // Event handlers
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


    // Variable where <Pokemon /> components will be stored
    let pokemonThatWillBeRendered;
    
    if (perTypeState.pokemonList && !toggleMovesState.toggleMoves) {
        pokemonThatWillBeRendered = perTypeState.pokemonList.map((element) => {
            return <Pokemon key={element.pokemon.name} pokemonName={element.pokemon.name} pokemonUrl={element.pokemon.url} />;
        });
    } else {
        pokemonThatWillBeRendered = <p>Loading...</p>;
    }


    // Variable where <Move /> components will be stored
    let movesThatWillBeRendered;

    if (perTypeState.moveList && toggleMovesState.toggleMoves) {
        movesThatWillBeRendered = perTypeState.moveList.map((element) => {
            return <Move key={element.name} moveName={element.name} moveUrl={element.url}/>
        });
    } else {
        movesThatWillBeRendered = <p>Loading...</p>;
    }


    // Variable where <DamageRelations /> components will be stored
    let damageRelationsThatWillBeRendered;

    if (perTypeState.damageRelations) {
        damageRelationsThatWillBeRendered = <DamageRelations damageRelationsObject={perTypeState.damageRelations} typeBadgeClickHandler={typeBadgeClickHandler}/>;
    } else {
        damageRelationsThatWillBeRendered = <p>Loading...</p>
    }


    // Classes
    let divClassList = ["container", "pt-5", perTypeState.typeNameForClassList].join(' ');

    // Render the variables
    return(
        <div className={divClassList}>
            {damageRelationsThatWillBeRendered}

            <div class="container">
                <div className="row">
                    {!toggleMovesState.toggleMoves ? 
                    pokemonThatWillBeRendered : 
                    movesThatWillBeRendered}
                </div>
            </div>
            
            <Menu pokemonButtonClickHandler={pokemonButtonClickHandler} movesButtonClickHandler={movesButtonClickHandler} />
        </div>
    );
}

export default PerType;