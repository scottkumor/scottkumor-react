import React from 'react'
import Carousel from 'nuka-carousel';

const Portfolio = () => (
    
    <div>
        <div className="">Solo Projects</div>

        <Carousel className="">

            <div className="">
                <a className="" href="https://scottkumor.github.io/Password-Generator/">
                    <div className="">Password Generator</div>
                    <img alt="" className="" src="./assets/images/soon5.jpg" />
                </a>
            </div>

            <div className="">
                <a className="" href="https://scottkumor.github.io/Day-Planner/">
                    <div className="">Day Planner</div>
                    <img alt="" className="" src="./assets/images/soon3.jpg" />
                </a>
            </div>

            <div className="">
                <a className="" href="https://scottkumor.github.io/Weather-Dashboard/">
                    <div className="">Weather Dashboard</div>
                    <img alt="" className="" src="./assets/images/152-367x267.jpg" />
                </a>
            </div>

            <div className="">
                <a className="" href="https://scottkumor.github.io/Dev-Profile-Generator/">
                    <div className="">Profile Generator</div>
                    <img alt="" className="" src="./assets/images/331-3648x2432.jpg" />
                </a>
            </div>

            <div className="">
                <a className="" href="https://scottkumor.github.io/note-taker/">
                    <div className="">Note Taker</div>
                    <img alt="" className="" src="./assets/images/4-5616x3744.jpg" />
                </a>
            </div>

            <div className="">
                <a className="" href="https://da-burger-smk.herokuapp.com/">
                    <div className="">Database CLI with "Burgers"</div>
                    <img alt="" className="" src="./assets/images/soon4.jpg" />
                </a>
            </div>
            <div className="">
                <a className="" href="https://hot-restaurant-scottkumor.herokuapp.com/">
                    <div className="">Restaurant Reservations</div>
                    <img alt="" className="" src="./assets/images/437-367x267.jpg" />
                </a>
            </div>

            <div className="">
                <a className="" href="https://star-wars-scottkumor.herokuapp.com/">
                    <div className="">Create Your Own Star Wars Character</div>
                    <img alt="" className="" src="./assets/images/537-2291x3450.jpg" />
                </a>
            </div>
        </Carousel>

        <div className="">Collaborations</div>
        <Carousel className="">
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

            <div className=""> My <a className="" href="https://github.com/scottkumor">
                Github Page</a> is the best place to keep up to date with all my projects and endeavors. Feel free to preruse at your leisure.
        </div>
        </Carousel>
    </div>

)

export default Portfolio;