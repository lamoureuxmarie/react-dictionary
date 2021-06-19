import React, { useState } from 'react';
import './Dictionary.css';
import axios from 'axios';
import Results from './Results';

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
}
    
   //documentation: https://dictionaryapi.dev/
    function search(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

   

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return <div className="Dictionary">
        <section>
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} autoFocus="false" />
        </form>
        </section>
        <Results results={results} />
    </div>
};