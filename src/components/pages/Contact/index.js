import React, { useState, useEffect } from "react"; import DB from "../../../data/letters.json"
import Nav from "./../../Nav"
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



    return (
        <div id="contactPage" className="contactPage" style={{ backgroundImage: `url(${imageUrl})` }}>

            <div className="wrapper">
                <div className="letters">
                    {DB.map(letter => (
                        <span key={letter.id} className="letter">{letter.char}</span>
                    ))}
                </div>

            </div>

            <div className="contactContent">
                <div id="email" className="reveal">scott.kumor1212@gmail.com</div>
                <div className="block">
                    Click <div className="upper">"email me"</div> below to generate a new message to me using your default mail app.
                        Click <div className="upper">"copy email"</div> to to copy my email address and paste into the subject line
                        of the mailing service of your choice. I typically reply within 1-2 business days.
                </div>
                <form className="" method="post" action="mailto:scott.kumor1212@gmail.com" >
                    <input
                        className=""
                        type="submit" value="Send Email"
                    />
                </form>
                <button
                    id="copyBtn"
                    onClick={copyEmail}
                    className="">
                    Copy Email
                </button>

            </div>
            <div className="">This website was built from scratch using React.js</div>

            <Nav />
        </div>
    )
}

export default Contact;
