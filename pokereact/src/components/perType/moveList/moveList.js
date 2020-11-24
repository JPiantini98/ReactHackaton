import Move from "./move/move.js";

function moveList(props) {
    // Variable where <Pokemon /> components will be stored
    let movesThatWillBeRendered = [];
    
    if (props.listOfMovesFromState) {
        movesThatWillBeRendered = props.listOfMovesFromState.map((element) => {
            return <Move key={element.name} moveName={element.name} moveUrl={element.url} />;
        });
    } else {
        movesThatWillBeRendered = <p>Loading...</p>;
    }

    return (
        <div className="row">
            {movesThatWillBeRendered}
        </div>
    );
}

export default moveList;