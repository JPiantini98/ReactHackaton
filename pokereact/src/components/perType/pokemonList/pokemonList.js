import Pokemon from "./pokemon/pokemon.js";

function pokemonList(props) {
    // Variable where <Pokemon /> components will be stored
    let pokemonThatWillBeRendered = [];
    
    if (props.listOfPokemonFromState) {
        pokemonThatWillBeRendered = props.listOfPokemonFromState.map((element) => {
            return <Pokemon key={element.pokemon.name} pokemonName={element.pokemon.name} pokemonUrl={element.pokemon.url} />;
        });
    } else {
        pokemonThatWillBeRendered = <p>Loading...</p>;
    }

    return (
        <div className="row">
            {pokemonThatWillBeRendered}
        </div>
    );
}

export default pokemonList;