import React from 'react';
import Synonyms from './Synonyms';
import './Meaning.css';

export default function Meaning(props) {
    return (
        <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index) {
                  return (
                    <div key={index}>
                     <p>
                     {definition.definition}
                     <br />
                     {definition.example && (
    <div className="example">
      <strong>Example: </strong>
      <em>"{definition.example}".</em>
    </div>
  )}
                     <br />
                     <Synonyms synonyms={definition.synonyms} />
                     </p>
                     </div>
                    );
              })}


        </div>
    );
}
