import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results"
import Photos from "./Photos";

export default function Dictionary() {
   let [keyword, setKeyword] = useState("");
   let [results, setResults] = useState(null);
   let [photos, setPhotos] = useState(null);

   function handleResponse(response) {
    setResults(response.data);
    

   }
    function search(event){
        event.preventDefault();
 
 function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
 }
   
   
 let apiKey = "65394c1aaf70b9a62t37c04bob3209ea"
 let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`
   axios.get(apiUrl).then(handleResponse);
let photoKey = "65394c1aaf70b9a62t37c04bob3209ea"
let photoUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}}&key=${photoKey}`
  axios.get(photoUrl).then(handlePhotoResponse); 
}

    function handleKeywordChange(event) {
        setKeyword(event.target.value);

    }
return (
    <div className="Dictionary">
        <section>
            <h2 className="search">What word are you looking for?</h2>
    <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} placeholder="Enter a word..."/>
    </form>
    <div className="hint">
        Suggested words: sunset, wine, yoga, plants.
    </div>
    </section>
    <Results results={results} />
    <Photos photos={photos} />
</div>
); }