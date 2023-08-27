import React from "react";
import "./Meaning.css"

export default function Meaning(props) {
    return (
        <div className="Meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
    
    <div className="Definition">
        <strong>Definition:</strong> {props.meaning.definition}</div>
    
    <div className="Example">
    <strong>Example:</strong> {props.meaning.example}
    </div>
    <div className="Synonyms">
        <strong> Synonyms:</strong> {props.meaning.synonyms} 
    </div>
    </div>
    );
    
}