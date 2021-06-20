import React from 'react';
import "./Phonetics.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'

export default function Phonetics (props) {
    return (
        <div className="Phonetics">
            <a href={props.phonetic.audio} target="_blank"><FontAwesomeIcon icon={faVolumeUp} /></a>
        
            <span className="text">{props.phonetic.text}</span>
        </div>
    );
}