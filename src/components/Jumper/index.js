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
        <a className="linkWrap" href={props.link} target="_blank">
            <FontAwesomeIcon className="svg" size="9x" icon={props.icon}></FontAwesomeIcon>

            <div className="infoWrap">
                <div className="legend">{props.name}</div>

                <div className="infoCard">{props.description}</div>
            </div>
        </a>
    )
};

export default Jumper;