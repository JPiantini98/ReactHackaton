import React from "react";
import "./menu.css";

function Menu(props) {
    return (
        <div className="MenuContainer">
            <button className="MenuButton" onClick={props.pokemonButtonClickHandler}>Pokemon</button>
            <button className="MenuButton" onClick={props.movesButtonClickHandler}>Moves</button>
        </div>
    );
}

export default Menu;