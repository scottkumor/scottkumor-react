/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';


function Jumper(props) {

    const iconList = Object
        .keys(Icons) //gtes the names of the icons as a string
        .filter(key => key !== "fas" && key !== "prefix") //filters out common parts of all the strings
        .map(icon => Icons[icon]); //goes through filtered strings and assigns them to what FA needs
    library.add(...iconList); //adds them to the FA library fro reference


    return (
        <div className="infoWrap">
            <div className="infoCard">
                <FontAwesomeIcon className="svg" size="7x" icon={props.icon}></FontAwesomeIcon>
                
                <div className="infoDesc">{props.description}</div>
            </div>
            <a className="linkWrap" href={props.link} target="_blank">
            {props.name}
            </a>
        </div>
    )
};

export default Jumper;