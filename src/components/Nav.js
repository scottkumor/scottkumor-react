import React from 'react'


function Nav(props) {
 
        return (
            <div id="nav" className="d-f ps-f m-m">
                <button
                    className="fz-j mr-m c-fw bg-c-fk c-w-fc bg-c-n-fc c-dg-hv bg-c-fw-hv"
                    onClick={() => props.handlePageChange("Home")}>
                    Home
                </button>
                <button
                    className="fz-j mr-m c-fw bg-c-fk c-w-fc bg-c-n-fc c-dg-hv bg-c-fw-hv"
                    onClick={() => props.handlePageChange("About")}>
                    About
                </button>
                <button
                    className="fz-j mr-m c-fw bg-c-fk c-w-fc bg-c-n-fc c-dg-hv bg-c-fw-hv"
                    onClick={() => props.handlePageChange("Portfolio")}>
                    Portfolio
                </button>
                <button
                    className="fz-j mr-m c-fw bg-c-fk c-w-fc bg-c-n-fc c-dg-hv bg-c-fw-hv"
                    onClick={() => props.handlePageChange("Contact")}>
                    Contact
                </button>
            </div>
        )
    }

export default Nav;