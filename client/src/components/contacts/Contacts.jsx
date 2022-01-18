
import "./contacts.scss";

function Contacts() {

    return (
        <div className="contacts" id="contacts">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h1 className="contactHeader">Contact Me</h1>
                <div className="contactWrapper">
                    <div className="contactContent">
                        <span><strong>Email:</strong></span>
                        <span>jibupjacob@gmail.com</span>
                    </div>
                    <div className="contactContent">
                        <span><strong>LinkedIn:</strong></span>
                        <span><a href="https://www.linkedin.com/in/jibujacob07/" 
                                rel="noreferrer"
                            target="_blank">
                                https://www.linkedin.com/in/jibujacob07/
                            </a>
                        </span>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Contacts
