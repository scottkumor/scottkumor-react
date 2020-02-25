import React from 'react'

function Nav(props) {
 
        return (
            <nav id="nav" className="d-f jc-c ai-c fz-jj ps-f tps-st mt-l ml-m">
                <div className="m-m">
                    <a
                    href="#home"
                    className="aa b-n p-s td-n s-hv t-g-hv   
                    
                    c-fw bg-c-n 
                    c-dg-hv bg-c-fw-hv 
                    c-w-fc bg-c-fw-fc
                    
                    "
                    onClick={() => props.handlePageChange("Home")}
                    >
                    Home
                    </a>
                </div>
                <div className="m-m">
                    <a
                    href="#about"
                    className="aa b-n p-s td-n s-hv t-g-hv   
                    
                    c-fw bg-c-n 
                    c-dg-hv bg-c-fw-hv 
                    c-w-fc bg-c-fw-fc
                    
                    "
                    onClick={() => props.handlePageChange("About")}
                    >
                    About
                    </a>
                </div>
                <div className="m-m">
                    <a
                    href="#portfolio"
                    className="aa b-n p-s td-n s-hv t-g-hv   
                    
                    c-fw bg-c-n 
                    c-dg-hv bg-c-fw-hv 
                    c-w-fc bg-c-fw-fc
                    
                    "
                    onClick={() => props.handlePageChange("Portfolio")}
                    >
                    Portfolio
                    </a>
                </div>
                <div className="m-m">
                    <a
                    href="#contact"
                    className="aa b-n p-s td-n s-hv t-g-hv   
                    
                    c-fw bg-c-n 
                    c-dg-hv bg-c-fw-hv 
                    c-w-fc bg-c-fw-fc
                    
                    "
                    onClick={() => props.handlePageChange("Contact")}
                    >
                    Contact
                    </a>
                </div>
            </nav>
        )
    }

export default Nav;