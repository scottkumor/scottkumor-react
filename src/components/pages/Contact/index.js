import React, { Component } from "react";
import DB from "../../../data/letters.json";
import Nav from "./../../Nav";
// import Modal from "./../../Modal/index.js";
import ScrollAnimation from 'react-animate-on-scroll';
import "./style.css";
import "./letters.scss";
import desktopImage from './../../../assets/images/HomeIMG-Brad-Knight-Unsplash.jpg';
import mobileImage from './../../../assets/images/contactMobile.jpg';
import pdf from "../../../assets/files/ScottKumorResume.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';


export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    updateDimensions() {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {


        function sendEmail() {
            window.location = "mailto:scottkumor1212@gmail.com";
        }

        function openResume() {
            window.open(pdf);
        }

        function copyEmail() {
            
            var str = "scott.kumor1212@gmail.com"
            function listener(e) {
                e.clipboardData.setData("text/html", str);
                e.clipboardData.setData("text/plain", str);
                e.preventDefault();
            }
            document.addEventListener("copy", listener);
            document.execCommand("copy");
            document.removeEventListener("copy", listener);
        
    }

        let width = window.innerWidth;


        if (width > 768) {
            return (

                <div id="contactPage" className="contactPage" style={{ backgroundImage: `url(${desktopImage})` }}>
                    <div>
                        <ScrollAnimation
                            className="wrapper"
                            animateIn='fadeInDown'
                            animateOnce={true}
                            duration={10}
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

                                <button onClick={copyEmail} className="contactBtn">
                                    Copy Email
                            </button>
                                {/* <Modal /> */}

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
        } if (width <= 768) {
            return (
                <div id="contactPage" className="contactPage" style={{ backgroundImage: `url(${mobileImage})` }}>
                    <Nav />

                    <ScrollAnimation
                        className="btnFlex"
                        animateIn="fadeIn"
                        delay={0}
                    >
                        <div className="btnsWrap">

                            <ScrollAnimation
                                className="greeting"
                                animateIn="fadeInDown"
                                delay={2}
                                duration={10}
                            >
                                Contact Me
                            </ScrollAnimation>

                            <button onClick={sendEmail} className="send">
                                Email Me
                            </button>

                            <button onClick={copyEmail} className="copy">
                                Copy Email
                            </button>

                            {/* <Modal /> */}

                            

                            <button id="pdfBtn" onClick={openResume} className="pdf">
                                Open Resume
                            </button>

                            <a
                                id="dlBtn"
                                className="download"
                                download href={pdf}
                            >
                                Download Resume
                            </a>
                        </div>


                    </ScrollAnimation>
                </div >

            )
        }
    }
}
