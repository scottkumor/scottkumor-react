import React from 'react'
import './Jumper.css'

function Jumper(props) {

    return (
        <div className="cardWrap">
            <img className="cardImg" alt={props.alt} title={props.title} src={props.image} />
            <div className="legend">{props.name}</div>
            {/* <a className="linkWrap" href={props.link}>
                <div className="title">{props.name}</div>
                
            </a> */}
        </div>
    )
};

export default Jumper;