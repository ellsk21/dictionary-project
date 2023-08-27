import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results"

export default function Dictionary() {
   let [keyword, setKeyword] = useState("");
   let [results, setResults] = useState(null);

   function handleResponse(response) {
    setResults(response.data);
    

   }
    function search(event){
        event.preventDefault();
 

   
   
 let apiKey = "65394c1aaf70b9a62t37c04bob3209ea"
 let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`
   axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);

    }
return (
    <div className="Dictionary">
    <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
    </form>
    <Results results={results} />
</div>
); }