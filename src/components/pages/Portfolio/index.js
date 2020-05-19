import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./style.css"
import Jumper from '../../Jumper/Jumper'
import DB from "../../../data/db.json"

class Portfolio extends Component {

    render() {
        return (
            <div className="portWrap">

                <div className="linkWrap"> 
                    Here you will find links too all the projects I have worked on - some personally and some in 
                    collaboration. <a className="gitLink" href="https://github.com/scottkumor" rel="noopener noreferrer" target="_blank">
                    Here</a> is the link to my Github page, where you preruse my code at your leisure.
                    Should you have any feedback, drop me a line on the <a className="gitLink" href="/contact">Contact</a> page. 
                    Note - all projects will open in a new tab so this page can remain how you left it.
                </div>

                <Carousel
                    showThumbs={false}
                    infiniteLoop={true}
                    swipeable={true}
                    emulateTouch={true}
                >

                    {DB.map(item => (
                        <Jumper
                            id={item.id}
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            link={item.link}
                            alt={item.alt}
                            title={item.title}
                            credit={item.credit}
                            description={item.description}
                        />
                    ))}
                    

                </Carousel>

            </div>
        )
    }
}

export default Portfolio;


/* <div className=""> Photo by Carolyn V on Unsplash
<a className="" href="https://scottkumor.github.io/Day-Planner/">
    <div className="">Day Planner</div>
    <img alt="" className="" src="./assets/images/soon3.jpg" />
</a>
</div>

<div className=""> Photo by John Macdonald on Unsplash
<a className="" href="https://scottkumor.github.io/Weather-Dashboard/">
    <div className="">Weather Dashboard</div>
    <img alt="" className="" src="./assets/images/152-367x267.jpg" />
</a>
</div>

<div className="">
<a className="" href="https://iedson.github.io/spotlight/">
    <div className="">Spotlight</div>
    <img alt="" className="" src="./assets/images/spotlight.jpg" />
</a>
</div>

<div className="">
<a className="" href="https://sovest.herokuapp.com/">
    <div className="">Sovest</div>
    <img alt="" className="" src="./assets/images/main-logo.png" />
</a>
</div> */