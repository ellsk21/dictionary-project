import React from "react";

export default function Results(props) {
    if (props.results) {
        return ( 
        <div className="results">
            <h2>{props.results.word}</h2>
            {props.results.meanings.map(function(meanings, index){
               return meanings.definition[0];
            })}
            </div>
        );

        } else { return null;
    }
}