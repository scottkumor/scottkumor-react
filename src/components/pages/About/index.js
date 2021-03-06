import React, { useEffect } from 'react'
import Nav from "./../../Nav"
import ScrollAnimation from 'react-animate-on-scroll';
import "./style.css"

const About = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <Nav />
            <main className="main">

                <section className="cd-section cd-section--bg-fixed">
                    <div className="jbo">
                        <div className="h1"> About Me </div>
                        <div className="h2">A General Overview</div>
                    </div>
                </section>

                <section className="cd-section section--text">

                     <div className="tagWrap">
                        <ScrollAnimation 
                            animateIn="fadeInDown" 
                            animateOnce={true} 
                            className="tagline"
                            delay={2000}
                        >If You Can</ScrollAnimation>
                        <ScrollAnimation 
                            animateIn="fadeIn" 
                            animateOnce={true} 
                            className="tagline fixer"
                            duration={6}
                        >Dream</ScrollAnimation>
                        <ScrollAnimation 
                            animateIn="fadeInDown"
                            animateOnce={true}  
                            className="tagline"
                            delay={2000}
                        >It, I Can Do It.</ScrollAnimation>

                    </div>
                    <p className="p">I'm a Web Developer based in the Greater Chicago area. Currently I am
                    looking for positions working on the front end - HTML, CSS, JavaScript,
                    and React are the tools I'm most comfortable working with, though I am always
                    expanding my horizons with proven techniques and experimental technologies.
                    I have a good eye for design and the techincal skill to translate my ideas onto the page.
                    </p>

                    <p className="p">I've known since the early days of the internet I wanted in on this world - I've always
                    been fascinated with the way people view and interact with the web as well as the
                    creativity and planning that went into making the internet what it is today. It truly is
                    my privelege to be a part of this field and to be able to learn so much
                    and exhibit my abilities through my passion
                    </p>

                    <ScrollAnimation 
                        animateIn="fadeInDown" 
                        offset={300}
                        animateOnce={true} 
                        className="tagline"
                    >
                        for all to see.
                    </ScrollAnimation>

                </section>

                <section className="cd-section cd-section--bg-fixed">
                    <div className="jbo">
                        <div className="h1"> Education </div>
                        <div className="h2">Degrees, Certificates, and Experience</div>
                    </div>
                </section>

                <section className="cd-section section--text">

                    <div className="tagWrap">
                        <ScrollAnimation 
                            animateIn="fadeInDown" 
                            animateOnce={true} 
                            className="tagline"
                            delay={2000}
                        >“Visibility without</ScrollAnimation>
                        <ScrollAnimation 
                            animateIn="fadeIn" 
                            animateOnce={true} 
                            className="tagline fixer"
                            duration={6}
                        >Value</ScrollAnimation>
                        <ScrollAnimation 
                            animateIn="fadeInDown"
                            animateOnce={true}  
                            className="tagline"
                            delay={2000}
                        >is Vanity”</ScrollAnimation>
                    </div>
                    <ScrollAnimation 
                        animateIn="fadeInDown"
                        animateOnce={true}
                        delay={3000}
                        duration={4}
                        className="subTagline"
                    >
                        ― Bernard Kelvin Clive
                    </ScrollAnimation>

                    <p className="p">I earned a Bachelors of Business Administration in Information Systems from the
                    University of Cincinnati Lindner College of Business and a
                    certificate from Northwestern University's Trilogy Full Stack Web
                    Development Boot Camp program, focusing on the MERN Stack. These programs
                    exposed me not only to the technology that drives our collective web experience,
                    but to the logistics and business processes needed to devolep a commercial website.</p>

                    <p className="p"> Its not just about creating something that looks good - its about generating value for
                    the product or service you are showcasing for a user to interact with. In other words,
                    the web is the intermediary between the consumer and the business, and needs to be tailored
                    to fit in with what the user expects. That's where I come in - utilizing my practical business
                    knowledge and my ability to develop a page, I can use my skills to generate value</p>

                    <ScrollAnimation 
                        animateIn="fadeInDown" 
                        offset={300}
                        animateOnce={true} 
                        className="tagline"
                    >
                        for you.
                    </ScrollAnimation>
                </section>

                <section className="cd-section cd-section--bg-fixed">
                    <div className="jbo">
                        <div className="h1"> Reflections </div>
                        <div className="h2">Looking Inward to Grow Outward</div>
                    </div>
                </section>

                <section className="cd-section section--text">

                <div className="tagWrap">
                        <ScrollAnimation 
                            animateIn="fadeInDown" 
                            animateOnce={true} 
                            className="tagline"
                            delay={2000}
                        >No Pain, No</ScrollAnimation>
                        <ScrollAnimation 
                            animateIn="fadeIn" 
                            animateOnce={true} 
                            className="tagline fixer2"
                            duration={6}
                        >Gain.</ScrollAnimation>
                        
                    </div>

                    <p className="p"> In my free-time I enjoy playing music on my various instruments –
                    I play guitar, drums, bass, and keyboard among other things. I am also a skier, snowboarder,
                    golfer, and tennis player when the weather is right! I love to involve myself in whatever I could –
                    I found that the more communities I exposed myself to and the more skills I got under my belt, the
                    more enriched I became as a person for myself and others. Exploring new places and sharing them with
                    the people I meet along the way have always broadened my perspective and opened so many doors I never
                     even knew were there.
                </p>

                    <p className="p">From a young age, I tried to expand my horizons and learn about the world as much as possible.
                    I became a Jack of All Trades while slowly mastering the ones that I felt were worth it. Many of my endeavors led to
                    failures and shortcomings – I quickly had to adapt to learn how to manage my time and enjoyment so I can best utilize
                    my time. Often times it wasn't easy - there was a lot of pain, regret, and second-guessing along the way. It was hard to let
                    go of some things because of the value I saw in it or the outlook it could give me. Being able to surrender for my
                own good is a hard skill to master.</p>


                    <p className="p">The philosophies I gained from my past have translated well into my development career – I can prioritize what best fits
                    my requirements and push the limits of what I know to propel my projects to places I never dreamed of, while still
                    constantly looking back and deciding if what I'm doing will work best for me in the long run. I still experience great joy when working on
                    a project thats finally coming together, or even just starting to look like a real page for the first time. The thrill of landing my
                    first kickflip, floating over that first jump on my new snowboard, nailing that first serve in the match - all of these
                    feelings directly compare to getting my first component to render, writing a working loop, or getting my flex grid to
                    finally center my content. Every day I strive to achieve something a past version of me struggled with or couldn’t quite work out.
                    Developing an app is not unlike learning a new trick, or figuring out a new chord progression or even determining the right
                    line on the green - it is a constant battle with yourself and a collaborative effort with others that really make these
                experiences special. It will be a feeling that I’ll be chasing, in my career or in in my life,</p>

                <ScrollAnimation 
                        animateIn="fadeInDown" 
                        offset={300}
                        animateOnce={true} 
                        className="tagline"
                    >
                        forever.
                    </ScrollAnimation>

                </section>

                <section className="cd-section cd-section--bg-fixed"></section>
            </main>
        </>
    )
}

export default About;