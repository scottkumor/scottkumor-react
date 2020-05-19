import React, { useState, useEffect } from 'react';
import './Home.css'
import desktopImage from './../../assets/images/HomeIMG-Brad-Knight-Unsplash.jpg';
import mobileImage from './../../assets/images/sunset.jpg';


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
    
    return (

        <div className="page" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="contentWrap">
                <div className="p1">Welcome</div>
                <div className="p2">
                    Welcome to my personal website. The buttons in the navigation bar will take you to various parts of the site -
                    'About' will direct you my background information. 'Portfolio' will let you view
                    all my past and current projects. 'Contact' will lead you to the
                    the best ways to reach out to me should you want to, as well as the option to generate a PDF of my Résumé.
                </div>
            </div>
        </div>

    )
};



export default Home;


