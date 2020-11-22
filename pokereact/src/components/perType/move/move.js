import React from "react";
import "./move.css";

function Move(props) {
    return(
        <div className="card pt-2 mb-1 col-4 Move-Card">
            <p className="text-center lead Move">{props.moveName[0].toUpperCase() + props.moveName.substring(1)}</p>
        </div>
    );
}

export default Move;