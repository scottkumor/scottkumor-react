import React, { useState, useEffect } from "react";
import DB from "../../../data/letters.json";
import Nav from "./../../Nav";
import Modal from "./../../Modal/index.js";
import ScrollAnimation from 'react-animate-on-scroll';
import "./style.css";
import "./letters.scss";
import desktopImage from './../../../assets/images/HomeIMG-Brad-Knight-Unsplash.jpg';
import mobileImage from './../../../assets/images/sunset.jpg';
import pdf from "../../../assets/files/ScottKumorResume.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';


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

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    function sendEmail() {
        window.location = "mailto:scottkumor1212@gmail.com";
    }

    function openResume() {
        window.open(pdf);
    }

    return (

        <div id="contactPage" className="contactPage" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="">
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

            <ScrollAnimation
                className="btnFlex"
                animateIn="fadeInDown"
                delay={4000}

            >
                <div className="btnsWrap">

                    <button
                        onClick={sendEmail}
                        className="contactBtn"
                    >
                        Email Me
                    </button>

                    <Modal />

                    <FontAwesomeIcon
                        icon={faGripLinesVertical}
                        size="4x"
                        style={{ padding: "1vw" }}
                    />

                    <button
                        id="pdfBtn"
                        onClick={openResume}
                        className="contactBtn"
                    >
                        Open PDF
                        </button>

                    <a
                        id="dlBtn"
                        className="contactBtn"
                        download href={pdf}
                    >
                        Download PDF
                        </a>
                </div>
                

            </ScrollAnimation>
            </div>
            <Nav />
        </div>
    )
}

export default Contact;


