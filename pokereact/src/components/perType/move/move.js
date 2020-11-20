import React from "react";
import "./move.css";

function Move(props) {
    return(
        <p className="Move">{props.moveName}</p>
    );
}

export default Move;