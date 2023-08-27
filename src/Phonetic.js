import React from "react";

export default function Phonetic(props) {
    if (props.phonetics.text) {
        return (
            <div className="Phonetics">
                <h4>{props.phoneetics.text}</h4>
            </div>
        );
    } else {
        return(
            <div className="Phonetics">
                <h4> N/A </h4>
            </div>
        );
    }
    
}