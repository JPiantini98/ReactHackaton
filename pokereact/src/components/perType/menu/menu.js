import React from "react";
import "./menu.css";

function Menu(props) {
    return (
        <div className="Menu-margin">
            <footer className="card-footer bg-light fixed-bottom">
                <div className="btn-group col">
                    <button type="button" className="btn btn-outline-dark col mr-2" onClick={props.pokemonButtonClickHandler}>Pokemon</button>
                    <button type="button" className="btn btn-outline-dark col" onClick={props.movesButtonClickHandler}>Moves</button>
                </div>
            </footer>
        </div>    
    );
}

export default Menu;