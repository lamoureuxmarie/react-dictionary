import React, { useState } from 'react';
import './Dictionary.css';
import axios from 'axios';
import Results from './Results';

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
}

function search() {
     //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
}


    function handleSubmit(event) {
        event.preventDefault();
        search();
    }



    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
    <div className="Dictionary">
    <form onSubmit={handleSubmit} autoFocus="false" >
      <div className="row">
        <div className="col-12 d-flex">
          <input className="word" type="search" onChange={handleKeywordChange} placeHolder="Dictionary" defaultValue={props.defaultKeyword} autofocus="on"/>
          <input className="search" type="submit" value="Search"/>
        </div>
      </div>
    </form>
    <Results results={results} />
</div>
);
    } else {
       load();
       return "Loading";
    }

}
