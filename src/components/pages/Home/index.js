import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import FadeIn from "react-fade-in"
import "./style.css";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import desktopImage from './../../../assets/images/home-kevin-young.jpg'
import mobileImage from './../../../assets/images/contact.jpg';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth > 768 ? desktopImage : mobileImage;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    
    return (

        <div id="homePage" className="homePage" style={{ backgroundImage: `url(${imageUrl})` }}>

            <div className="contentWrap">
                <ScrollAnimation 
                    className="title" 
                    animateIn='fadeInDown'
                    animateOut="fadeOut"
                    animateOnce={true}
                    duration={3}
                > 
                    <div className="p1">Scott Kumor</div>
                </ScrollAnimation>


                <ScrollAnimation 
                    className="p2"
                    animateIn='fadeInDown'
                    animateOut='fadeOutDown'
                    animateOnce={true}
                    duration={5}

                >
                    <Link className="btn"to="/about">About</Link>
                    <Link className="btn"to="/portfolio">Portfolio</Link>
                    <Link className="btn"to="/contact">Contact</Link> 
                </ScrollAnimation>     
                
                <div className="footer"> Photo Credit to Kevin Young</div>

            </div>   
        </div>

    )
};


export default Home;