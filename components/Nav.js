import React from 'react'

function Nav(props) {

        return (
            <ul id="nav" className="d-f jc-c ai-c fz-jj mt-l">
                <li className="b-n bg-c-b-fc bg-c-db-hv bg-c-n c-db c-db-fc c-w-hv mr-s p-s td-n s-hv t-g-hv t-s-fc">
                    <a
                    href="#home"
                    onClick={() => props.handlePageChange("Home")}
                    className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
                    >
                    Home
                    </a>
                </li>
                <li className="b-n bg-c-b-fc bg-c-db-hv bg-c-n c-db c-db-fc c-w-hv mr-s p-s td-n s-hv t-g-hv t-s-fc">
                    <a
                    href="#about"
                    onClick={() => props.handlePageChange("About")}
                    className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
                    >
                    About
                    </a>
                </li>
                <li className="b-n bg-c-b-fc bg-c-db-hv bg-c-n c-db c-db-fc c-w-hv mr-s p-s td-n s-hv t-g-hv t-s-fc">
                    <a
                    href="#portfolio"
                    onClick={() => props.handlePageChange("Portfolio")}
                    className={props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
                    >
                    Portfolio
                    </a>
                </li>
                <li className="b-n bg-c-b-fc bg-c-db-hv bg-c-n c-db c-db-fc c-w-hv mr-s p-s td-n s-hv t-g-hv t-s-fc">
                    <a
                    href="#contact"
                    onClick={() => props.handlePageChange("Contact")}
                    className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
                    >
                    Contact
                    </a>
                </li>
            </ul>
        )
    }

export default Nav;