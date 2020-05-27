import React, { useState, useEffect } from "react";
import DB from "../../../data/letters.json";
import Nav from "./../../Nav";
import Resizer from "./../../Resizer"
import ScrollAnimation from 'react-animate-on-scroll';
// import FadeIn from "react-fade-in"
import "./style.css";
import "./letters.scss";
import desktopImage from './../../../assets/images/HomeIMG-Brad-Knight-Unsplash.jpg';
import mobileImage from './../../../assets/images/sunset.jpg';



function Contact() {

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

    

    return (
        <div id="contactPage" className="contactPage" style={{ backgroundImage: `url(${imageUrl})` }}>

            <ScrollAnimation
                className="wrapper"
                animateIn='fadeInDown'
                animateOut="fadeOut"
                animateOnce={true}
                duration={15}
            >
                <div id="letters" className="letters">
                    {DB.map(letter => (
                        <span key={letter.id} className="letter">{letter.char}</span>
                    ))}
                </div>
            </ScrollAnimation>

            <div className="contactContent">


                <ScrollAnimation
                    id="copy"
                    className="pBlock"
                    animateIn='fadeInLeft'
                    animateOnce={true}
                    duration={10}
                >
                    <div>Click <div className="upper">email me </div> to generate a new message
                    to me using your device's default mail app. Click <div className="upper">copy email </div>
                    to to copy to your keyboard. I typically reply within 1-2 business days.
                    </div>


                </ScrollAnimation>

                <ScrollAnimation
                    id="resume"
                    className="pBlock"
                    animateIn='fadeInRight'
                    animateOnce={true}
                    duration={10}
                >
                    <div>click <div className="upper">resume pdf </div> to generate PDF of my
                    resume in a new tab. click <div className="upper">download pdf </div>to save it to your device.
                    </div>

                </ScrollAnimation>
            </div>
            <Resizer />
        <Nav />
        </div >
    )
}

export default Contact;
