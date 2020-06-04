import React from 'react';
import Modal from 'simple-react-modal'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

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

        function copyEmail() {
            
            var str = "scott.kumor1212@gmail.com"
            console.log(str)
            function listener(e) {
                e.clipboardData.setData("text/html", str);
                e.clipboardData.setData("text/plain", str);
                e.preventDefault();
            }
            document.addEventListener("copy", listener);
            document.execCommand("copy");
            document.removeEventListener("copy", listener);
        
    }

        return (
            <div className="modalWrap" onClick={copyEmail}>
                <button className="contactBtn" onClick={this.show.bind(this)}>Copy Email</button>
                <Modal
                    className="modal" //this will completely overwrite the default css completely
                    // style={{}} //overwrites the default background
                    // containerStyle={{ background: 'blue' }} //changes styling on the inner content area
                    //containerClassName="" change the class on the containing div
                    show={this.state.show}
                    onClose={this.close.bind(this)}
                    transitionSpeed={500}
                >

                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        size='2x'
                        onClick={this.close.bind(this)}
                        className="close"
                    />
                    <div
                        className="emailWrap"
                    >
                        <div
                            id="email"
                            className="reveal"
                        >
                            scott.kumor1212@gmail.com
                        </div>
                        <div
                            id="copied"
                            className="reveal"

                        >
                            Copied to Clipboard!
                    </div>

                    </div>

                </Modal>
            </div>
        )
    }
}


