
import React from 'react';
import ScrollAnimation from "react-animate-on-scroll"
import Modal from 'simple-react-modal'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class ContactModal extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    show() {
        this.setState({ show: true })
    }

    close() {
        this.setState({ show: false })
    }


    render() {

        
       
        return (
            <div className="">
                <button className="contactBtn" onClick={this.show.bind(this)}>Copy Email</button>
                <Modal
                    className="modal" //this will completely overwrite the default css completely
                     style={{}} //overwrites the default background
                    // containerStyle={{ background: 'blue' }} //changes styling on the inner content area
                    //containerClassName="" change the class on the containing div
                    show={this.state.show}
                    onClose={this.close.bind(this)}
                    transitionSpeed={500}
                >

                    {/* <button className="close" onClose="" >X</button> */}
                    <FontAwesomeIcon
                        icon={faPlus}
                        size='2x'
                        style={{ padding: "1vw", transform: 'rotate(45deg)' }}
                        onClick={this.close.bind(this)}
                        className="close"
                    />
                    <ScrollAnimation
                        className="emailWrap"
                        animateIn="fadeIn"
                        initiallyVisible={false}
                    >
                        <div
                            id="email"
                            className="reveal"
                        >
                            scott.kumor1212@gmail.com
                    </div>
                        <div
                            id="copied"
                        >
                            Copied to Clipboard!
                    </div>

                    </ScrollAnimation>

                </Modal>
            </div>
        )
    }
}


