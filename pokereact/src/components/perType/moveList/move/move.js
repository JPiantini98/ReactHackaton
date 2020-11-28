import React from "react";
import "./move.css";

function Move(props) {
    // Excludes Dynamax Moves and Z-Moves
    if (props.moveName.includes("max-") || props.moveName.includes("--")) {
        return null;
    } else {
        return(
            <div className="card pt-2 mb-1 col-4 Move-Card">
                <p className="text-center lead text-capitalize Move">{props.moveName.replace('-', ' ')}</p>
            </div>
        );
    }
}

export default Move;