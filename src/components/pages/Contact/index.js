import React from 'react'


function Contact() {

    function changeText(){
        var btn = document.getElementById('copyBtn');
        btn.innerHTML="Copied";
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
   <>
        <div className="bg-w">
            <img className="bg-w" title="Contact Page" alt="Contact" src={require('./../../../assets/images/contact.jpg')} />
            <div className="mt-xxl d-f df-fdc jc-c ai-c">
                <div id="email">scott.kumor1212@gmail.com</div>
                <div className="t-i fz-j w-75vw c-k p-m lh-s m-s">   
                    Click "Email Me" below to generate a new message to me using your default mail app. 
                    Click "Copy Email" to to copy my email address and paste into the subject line 
                    of the mailing service of your choice. I typically reply within 1-2 business days.
                </div>
                <form className="mt-xxl" method="post" action="mailto:scott.kumor1212@gmail.com" >
                    <input 
                        className="fz-j bg-c-fg c-k c-w-fc bg-c-n-fc c-dg-hv bg-c-fw-hv m-s"
                        type="submit" value="Send Email" 
                    /> 
                </form>
                <button 
                    id="copyBtn"
                    onClick={copyEmail}
                    className=" fz-j mt-xxl bg-c-fg c-k c-w-fc bg-c-n-fc c-dg-hv bg-c-fw-hv w-25 m-s">
                    Copy Email
                </button>
                
            </div>
            <div className="c-w bps-sb">This website was built from scratch using React.js</div>

        </div>
    </>
   )
}

export default Contact;

// 