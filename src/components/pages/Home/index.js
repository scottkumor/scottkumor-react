import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in"
import "./style.css";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import desktopImage from './../../../assets/images/contact.jpg';
import mobileImage from './../../../assets/images/contact.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


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
                    className="p1" 
                    animateIn='fadeInDown'
                    animateOut="fadeOut"
                    animateOnce={true}
                    duration={3}
                > 
                    Scott Kumor
                </ScrollAnimation>

                <FadeIn
                    delay={5000}
                >
                    <ScrollAnimation 
                        delay={4500}
                        animateIn="bounce"
                        duration={3}
                        animateOnce={true}
                    >
                        <FontAwesomeIcon
                            icon={faArrowDown} 
                            size="5x"
                        />
                    </ScrollAnimation>
                </FadeIn>

                <ScrollAnimation className="p2"
                    animateIn='fadeInUp'
                    animateOut='fadeOutUp'
                    initiallyVisible={false}
                    animateOnce={true}
                    duration={2}
                    offset={300}
                >
                        <div className="inside">Welcome to my personal website. The buttons in the navigation bar will take you to various parts of the site -
                        'About' will direct you my background information. 'Portfolio' will let you view
                        all my past and current projects. 'Contact' will lead you to the
                        the best ways to reach out to me should you want to, as well as the option to generate a PDF of my Résumé.
                        </div> 
                </ScrollAnimation>
                
                <ScrollAnimation 
                    className="btnWrap"
                    animateIn='fadeInDown'
                    animateOut='fadeOutDown'
                    animateOnce={true}
                >
                    <Link className="btn"to="/about">About</Link>
                    <Link className="btn"to="/portfolio">Portfolio</Link>
                    <Link className="btn"to="/contact">Contact</Link> 
                </ScrollAnimation>

            </div>   
        </div>

    )
};


export default Home;