
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
                    <div className="contactContentIcon">
                        <span><a href="https://www.linkedin.com/in/jibujacob07/" 
                                rel="noreferrer"
                            target="_blank">
                                <i className="fab fa-linkedin"></i>
                            </a>         
                        </span>
                        <span><a href="https://github.com/jibujacob" 
                                rel="noreferrer"
                            target="_blank">
                                <i class="fab fa-github"></i>
                            </a>         
                        </span>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Contacts
