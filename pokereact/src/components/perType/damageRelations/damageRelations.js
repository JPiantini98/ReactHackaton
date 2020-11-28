import React from "react";
import { Link } from "react-router-dom";

import "./damageRelations.css";

function extractIDFromURL(url) {
    const splitURL = url.split('/');
    const extractedID = splitURL[splitURL.length - 2];
    return extractedID;
}

function arrayToSpanElementMapper(array) {
    let classList = ["badge", "badge-primary", "ml-1", "mb-2", "text-capitalize", "Type-badge"];
    let specificClassList;

    if (array.length > 0) {
        return array.map((element) => {
            specificClassList = [...classList];
            specificClassList.push(element.name + "-badge");
            specificClassList = specificClassList.join(' ');

            return (
                <Link key={element.name} to={"/per-type/" + extractIDFromURL(element.url)}>
                    <span className={specificClassList}>{element.name}</span>
                </Link>
            );
        });
    } else {
        specificClassList = ["badge", "badge-secondary", "mb-2"].join(' ');
        return <span className={specificClassList}>N/A</span>
    }

}

// Component
function DamageRelations(props) {
    
    if (!props.damageRelationsObject) {
        return <p>Loading...</p>;
    }

    const doubleDamageTo = arrayToSpanElementMapper(props.damageRelationsObject.double_damage_to);
    const halfDamageTo = arrayToSpanElementMapper(props.damageRelationsObject.half_damage_to);
    const noDamageTo = arrayToSpanElementMapper(props.damageRelationsObject.no_damage_to);
    const doubleDamageFrom = arrayToSpanElementMapper(props.damageRelationsObject.double_damage_from);
    const halfDamageFrom = arrayToSpanElementMapper(props.damageRelationsObject.half_damage_from);
    const noDamageFrom = arrayToSpanElementMapper(props.damageRelationsObject.no_damage_from);

    return(
        <div className="jumbotron transparentBackground">
            <h1 className="display-4 text-center damageRelationsTitle">{props.typeName[0].toUpperCase() + props.typeName.substring(1)} Type</h1>
            <div className="row">
                <div className="col-12 col-md">
                    <div className="card mt-1 damageRelationsCard">
                        <h5 className="card-title text-center lead damageRelationsText">Double damage to:</h5>
                        <p className="card-text text-center">{doubleDamageTo}</p>
                    </div>

                    <div className="card mt-1 damageRelationsCard">
                        <h5 className="card-title text-center lead damageRelationsText">Half damage to:</h5>
                        <p className="card-text text-center">{halfDamageTo}</p>
                    </div>

                    <div className="card mt-1 damageRelationsCard">
                        <h5 className="card-title text-center lead damageRelationsText">No damage to:</h5>
                        <p className="card-text text-center">{noDamageTo}</p>
                    </div>
                </div>

                <div className="col-12 col-md">
                    <div className="card mt-1 damageRelationsCard">
                        <h5 className="card-title text-center lead damageRelationsText">Double damage from:</h5>
                        <p className="card-text text-center">{doubleDamageFrom}</p>
                    </div>

                    <div className="card mt-1 damageRelationsCard">
                        <h5 className="card-title text-center lead damageRelationsText">Half damage from:</h5>
                        <p className="card-text text-center">{halfDamageFrom}</p>
                    </div>

                    <div className="card mt-1 damageRelationsCard">
                        <h5 className="card-title text-center lead damageRelationsText">No damage from:</h5>
                        <p className="card-text text-center">{noDamageFrom}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DamageRelations;