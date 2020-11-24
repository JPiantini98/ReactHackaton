import React from "react";
import "./damageRelations.css";

function arrayToSpanElementMapper(array, clickHandler) {
    let classList = ["badge", "badge-primary", "ml-1", "mb-2", "Type-badge"];
    let specificClassList;

    if (array.length > 0) {
        return array.map((element) => {
            specificClassList = [...classList];
            specificClassList.push(element.name + "-badge");
            specificClassList = specificClassList.join(' ');
    
            return <span key={element.name} className={specificClassList} onClick={() => clickHandler(element.name)}>{element.name[0].toUpperCase() + element.name.substring(1)}</span>
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

    const doubleDamageTo = arrayToSpanElementMapper(props.damageRelationsObject.double_damage_to, props.typeBadgeClickHandler);
    const halfDamageTo = arrayToSpanElementMapper(props.damageRelationsObject.half_damage_to, props.typeBadgeClickHandler);
    const noDamageTo = arrayToSpanElementMapper(props.damageRelationsObject.no_damage_to, props.typeBadgeClickHandler);
    const doubleDamageFrom = arrayToSpanElementMapper(props.damageRelationsObject.double_damage_from, props.typeBadgeClickHandler);
    const halfDamageFrom = arrayToSpanElementMapper(props.damageRelationsObject.half_damage_from, props.typeBadgeClickHandler);
    const noDamageFrom = arrayToSpanElementMapper(props.damageRelationsObject.no_damage_from, props.typeBadgeClickHandler);

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