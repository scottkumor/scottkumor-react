import React from 'react'
import Nav from "./../../Nav"
import "./style.css"

const About = () => (

    <>
        
        <Nav />
        <main>

            <section className="cd-section cd-section--bg-fixed">
                <div className="jbo top">
                    <div className="h1"> About Me </div>
                    <div className="h2">A General Overview</div>
                </div>
            </section>

            <section className="cd-section section--text">
            
                <p className="tagline">If You Can Dream It, I Can Do It.</p>

                <p className="p">I'm a Web Developer based in the Greater Chicago area. Currently I am
                looking for positions working on the front end - HTML, CSS, JavaScript,
                and React are the tools I'm most comfortable working with, though I am always
                expanding my horizons with proven techniques and experimental technologies.
                I have a good eye for design and the techincal skill to translate my ideas onto the page. 
                </p>

                <p className="p">I've only been in web design for a little while, but 
                    I knew since the early days of the internet I wanted in on this world - I've always
                    been fascinated with the way people view and interact with the web as well as the
                    creativity and planning that went into making the internet what it is today. It truly is
                    my privelege to be a part of this field and to be able to learn so much
                    and exhibit my abilities through my passion 
                </p>

                <p className="tagline">for all to see.</p>

            </section>

            <section className="cd-section cd-section--bg-fixed">
                <div className="jbo">
                    <div className="h1"> Education </div>
                    <div className="h2">Degrees, Certificates, and Experience</div>
                </div>
            </section>

            <section className="cd-section section--text">

                <p className="tagline">“Visibility without Value is Vanity”</p>
                    <p className="subTagline"> ― Bernard Kelvin Clive</p>

                <p className="p">I earned a Bachelors of Business Administration in Information Systems from the
                University of Cincinnati Lindner College of Business and a
                certificate from Northwestern University's Trilogy Full Stack Web
                Development Boot Camp program, focusing on the MERN Stack. These programs 
                exposed me not only to the technology that drives our collective web experience,
                but to the logistics and business processes needed to devolep a commercial website.</p>
                
                <p className="p"> Its not just about creating something that looks good - its about generating value for 
                the product or service you are showcasing for auser to interact with. In other words, 
                the web is the intermediary between the consumer and the business, and needs to be tailored 
                to fit in with what the user expects. That's where I come in - utilizing my practical business
                knowledge and my ability to develop a page, I can use my skills to generate value</p>
                
                <p className="tagline">for you.</p>

            </section>

            <section className="cd-section cd-section--bg-fixed">
                <div className="jbo">
                    <div className="h1"> Reflections </div>
                    <div className="h2">Looking Inward to Grow Outward</div>
                </div>
            </section>

            <section className="cd-section section--text">

                <p className="tagline">No Pain, No Gain.</p>

                <p className="p"> In my free-time I enjoy playing music on my various instruments – 
                I play guitar, drums, bass, keyboard among other things. I am also a skier, snowboarder, 
                golfer, and tennis player when the weather is right. I loved to involve myself in whatever I could – 
                I found that the more communities I exposed myself to and the more skills I got under my belt, the 
                more enriched I became as a person for myself and others. Exploring new places and sharing them with 
                the people I met along the way broadened my perspective and opened so many doors I never even knew could be opened.
                </p>

                <p className="p">From a young age I always tried to expand my horizons and learn about the world as much as possible.
                I became a Jack of All Trades while slowly mastering the ones that I felt were worth it. Many of my endeavors led to 
                failures and shortcomings – I quickly had to adapt to learn how to manage my time and enjoyment so I can best utilize 
                my time. OFten times it wasn't easy - there was a lot of pain and second-guessing along the way. It was hard to let 
                go of things simply because of the value I saw in it or the outlook it gave me. Being able to give it all up for my 
                own good is a hard skill to master.</p>
                
                
                <p className="p">The philosophies I gained from my past have translated well into my development career – I can prioritize what best fits 
                my requirements and push the limits of what I know to propel my projects to places I never dreamed of, while still 
                constantly looking back and deciding if what I'm doing will work best for me. I still expperience great joy when working on
                a project that coming together, or even just starting look like a real page for the first time. The thrill of landing my 
                first kickflip, floating over that first jump on my new snowboard, nailing that first serve in the match - all of these 
                feelings directly compare to getting my first react page to work, writing my first for-loop, or getting my flex grid to 
                finally center. Every day I strive to achieve something a past version of me struggled with or couldn’t quite work out. 
                Developing an app is not unlike learning a new trick, or figuring out a new chord progression or even determining the right 
                line on the green - it is a constant battle with yourself and a collaborative effort with others that really make these 
                experiences special. It will be a feeling that I’ll be chasing, in my career or in in my life,</p>
                
                <p className="tagline">forever.</p>

            </section>

            <section className="cd-section cd-section--bg-fixed"></section>
            <div className="footer">You've reached the end of the page - please enjoy this photo of the Chicago 
                skyline at dusk. Photo credit to u/612shooter on Reddit.</div>
        </main>
    </>
)

export default About;