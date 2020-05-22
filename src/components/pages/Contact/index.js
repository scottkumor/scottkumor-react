import React, { useState, useEffect } from "react";
import DB from "../../../data/letters.json"
import Nav from "./../../Nav"
import ScrollAnimation from 'react-animate-on-scroll';
// import FadeIn from "react-fade-in"
import "./style.css"
import "./letters.scss"
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

    function changeText() {
        var btn = document.getElementById('copyBtn');
        btn.innerHTML = "Copied";
    }

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

        changeText();
    }

    function scrollToggle() {
        var email = document.getElementById("email");
        var revBtn = document.getElementById("revBtn");
        var copytBtn = document.getElementById("copyBtn");
        email.style.display = "block";
        email.className = "reveal";
        revBtn.style.display = "none"
        copytBtn.style.display = "block"
        copyEmail();
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
                <div
                    id="email"
                    className=""
                >
                    scott.kumor1212@gmail.com
                </div>

                <ScrollAnimation
                    id="copy"
                    className="copy"
                    animateIn='fadeInLeft'
                    animateOnce={true}
                    duration={10}
                >
                    <div>Click <div className="upper">"email me"</div> to generate a new message
                    to me using your device's default mail app. Click <div className="upper">"copy email"</div>
                    to to copy to your keyboard. I typically reply within 1-2 business days.
                    </div>
                    <ScrollAnimation 
                        className="btnsWrap"
                        animateIn="fadeInDown"
                        delay={8000}
                        
                    >
                        <form className="" method="post" action="mailto:scott.kumor1212@gmail.com" >
                            <input
                                className="contactBtn"
                                type="submit" value="Email Me"
                            />
                        </form>

                        <button
                            id="copyBtn"
                            onClick={copyEmail}
                            className="contactBtn reveal"
                        >
                            Copy Email
                        </button>

                        <button
                            id="revBtn"
                            onClick={scrollToggle}
                            className="contactBtn"
                        >
                            Copy Email
                        </button>
                    </ScrollAnimation>
                </ScrollAnimation>

                <ScrollAnimation
                    className="resume"
                    animateIn='fadeInRight'
                    animateOnce={true}
                    duration={10}
                >
                    click Resume PDF to generate PDF of my resume in a new tab. click Resume Download
                    to save it to your device.
                </ScrollAnimation>




                <Nav />
            </div>
        </div>
    )
}

export default Contact;
