import React, { useState, useEffect } from "react";
import DB from "../../../data/letters.json";
import Nav from "./../../Nav";
import Modal from "./../../Modal/index.js";
import ScrollAnimation from 'react-animate-on-scroll';
// import FadeIn from "react-fade-in"
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

    // function changeText() {
    //     var btn = document.getElementById('copyBtn');
    //     btn.innerHTML = "Copied";
    // }

    function copyEmail() {

        var str = document.getElementById("email").innerHTML;
        function listener(e) {
            e.clipboardData.setData("text/html", str);
            e.clipboardData.setData("text/plain", str);
            e.preventDefault();
        }
        document.addEventListener("copy", listener);
        document.execCommand("copy");
        document.removeEventListener("copy", listener);

        // changeText();
    }

    function scrollToggle() {
        var email = document.getElementById("email");
        var copied = document.getElementById("copied");
        var revBtn = document.getElementById("revBtn");
        var copytBtn = document.getElementById("copyBtn");
        email.style.display = "block";
        copied.style.display = "block";
        email.className = "reveal";
        copied.className = "reveal";
        revBtn.style.display = "none"
        copytBtn.style.display = "block"
        copyEmail();
    }

    function sendEmail() {
        window.location = "mailto:scottkumor1212@gmail.com";
    }

    function openResume() {
        window.open(pdf);
    }

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


            <ScrollAnimation
                className="btnFlex"
                animateIn="fadeInDown"
                delay={1000}

            >
                <div className="btnsWrap">

                    <button
                        onClick={sendEmail}
                        className="contactBtn"
                    >
                        Email Me
                        </button>

                    <button
                        id="copyBtn"
                        onClick={copyEmail}
                        className="contactBtn"
                    >
                        Copy Email
                        </button>

                    {/* <button
                        id="revBtn"
                        onClick={scrollToggle}
                        className="contactBtn"
                    >
                        Copy Email 
                    </button> */}
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

            

            


            {/* <Nav /> */}
        </div>
    )
}

export default Contact;
