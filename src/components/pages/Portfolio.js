import React from 'react'
import Carousel from 'nuka-carousel';
import "./Portfolio.css"
import Jumper from '../Jumper'

const Portfolio = () => (

    <div className="portWrapper">
        
        <div className="">Projects</div>

        <Carousel className="carousel">

            <Jumper />

            <div className=""> Photo by Carolyn V on Unsplash
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
            </div>
            
        </Carousel>

       
            {/* <div className=""> My <a className="" href="https://github.com/scottkumor">
                Github Page</a> is the best place to keep up to date with all my projects and endeavors. Feel free to preruse at your leisure.
        </div> */}
        
    </div>

)

export default Portfolio;