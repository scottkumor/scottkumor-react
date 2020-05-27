import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';
import pdf from "./../../assets/files/ScottKumorResume.pdf";


export default class Resizer extends Component {
    state = {
        height: 0,
    };

    toggle = () => {
        const { height } = this.state;

        this.setState({
            height: height === 0 ? 'auto' : 0,
        });

        // scrollToggle(); DOES NOT WORK 
    };



    render() {
        const { height } = this.state;

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
            //   <div>
            //     <button onClick={ this.toggle }>
            //       { height === 0 ? 'Open' : 'Close' }
            //     </button>

            //     <AnimateHeight
            //       duration={ 500 }
            //       height={ height } // see props documentation below
            //     >
            //       <h1>Your content goes here</h1>
            //       <p>Put as many React or HTML components here.</p>
            //     </AnimateHeight>
            //   </div>

            <AnimateHeight
                duration={500}
                height={height}
            >
                <ScrollAnimation
                    className="btnFlex"
                    animateIn="fadeInDown"
                    delay={8000}

                >
                    {/* <div className="btnsWrap"> */}
                    <div
                        className="btnsWrap"
                    >

                        <button
                            onClick={sendEmail}
                            className="contactBtn"
                        >
                            Email Me
                        </button>

                        <button
                            id="revBtn"
                            onClick={scrollToggle}
                            // CALL THE TOGGLE FUNCTION HERE BUT IT NEEDS TO INTERACT WITH STATE
                            className="contactBtn"
                        >
                            Copy Email
                    </button>

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

                    <div className="emailWrap">
                        <div
                            id="email"
                            className="reveal"
                        >
                            scott.kumor1212@gmail.com
                    </div>
                        <div
                            id="copied"
                        >
                            Copied!
                    </div>
                    </div>
                </ScrollAnimation>
            </AnimateHeight>
        );
    }
}
