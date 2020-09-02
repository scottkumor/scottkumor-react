import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./style.css"
import Nav from "./../../Nav"
import Jumper from '../../Jumper'
import DB from "../../../data/db.json"

export default class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    componentDidMount() {
        console.log(this.state.height);
        // Additionally I could have just used an arrow function for the binding `this` to the component...
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
        let width = window.innerWidth;
        if (width > 768) {
            return (
                <>
                    <Nav />
                    <div className="bg"></div>
                    <div className="bg bg2"></div>
                    <div className="bg bg3"></div>

                    <div className="portWrap">

                        <Carousel
                            showThumbs={false}
                            infiniteLoop={true}
                            swipeable={true}
                            emulateTouch={true}
                        >
                            {DB.map(item => (
                                <Jumper
                                    id={item.id}
                                    key={item.id}
                                    name={item.name}
                                    image={item.image}
                                    link={item.link}
                                    alt={item.alt}
                                    title={item.title}
                                    credit={item.credit}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            ))}
                        </Carousel>

                        {/* <a className="gitLink" href="https://github.com/scottkumor" rel="noopener noreferrer" target="_blank">
                Visit my Github!
            </a>
             */}
                    </div>

                </>
            )
        } if (width <= 768) {
            return (
                <>
                    <Nav />
                    <div className="bg"></div>
                    <div className="bg bg2"></div>
                    <div className="bg bg3"></div>

                    <div className="portWrap">
                        {DB.map(item => (
                            <Jumper
                                id={item.id}
                                key={item.id}
                                name={item.name}
                                image={item.image}
                                link={item.link}
                                alt={item.alt}
                                title={item.title}
                                credit={item.credit}
                                description={item.description}
                                icon={item.icon}
                            />
                        ))}

                    </div>
                </>
            );
        }
    }
}