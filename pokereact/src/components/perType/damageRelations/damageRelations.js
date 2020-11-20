import React from "react";
import "./damageRelations.css";

function arrayToSpanElementMapper(array) {
    return array.map((element) => {
        return <span className="DamageRelationsElement">{element.name} </span>
    });
}

function DamageRelations(props) {

    const doubleDamageTo = arrayToSpanElementMapper(props.damageRelationsObject.double_damage_to);
    const halfDamageTo = arrayToSpanElementMapper(props.damageRelationsObject.half_damage_to);
    const noDamageTo = arrayToSpanElementMapper(props.damageRelationsObject.no_damage_to);
    const doubleDamageFrom = arrayToSpanElementMapper(props.damageRelationsObject.double_damage_from);
    const halfDamageFrom = arrayToSpanElementMapper(props.damageRelationsObject.half_damage_from);
    const noDamageFrom = arrayToSpanElementMapper(props.damageRelationsObject.no_damage_from);

    return(
        <div className="DamageRelationsContainer">
            <p>Double damage to: {doubleDamageTo}</p>
            <p>Half damage to: {halfDamageTo}</p>
            <p>No damage to: {noDamageTo}</p>
            <p>Double damage from: {doubleDamageFrom}</p>
            <p>Half damage from: {halfDamageFrom}</p>
            <p>No damage from: {noDamageFrom}</p>
        </div>
    );
}

export default DamageRelations;