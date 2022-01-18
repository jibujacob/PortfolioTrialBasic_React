import React from 'react';
import "./topbar.scss";

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="wrapper">
                <ul className="topbarList">
                    <a href="#intro">
                        <li className="listItem">HOME</li>
                    </a>  
                    <a href="#portfolio">
                        <li className="listItem">PORTFOLIO</li>
                    </a> 
                    <a href="#contacts">
                        <li className="listItem">CONTACT ME</li>
                    </a> 
                </ul>
            </div>    
        </div>
    )
}

export default Topbar
