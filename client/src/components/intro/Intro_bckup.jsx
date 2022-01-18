import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'


import "./intro.scss";

function Intro() {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, 
            { showCursor: true, 
                backDelay:1500,
                backSpeed:60,
                strings: ['Full Stack Developer', 'Data Engineer' ] })
    },[]);

    
    return (
        <div className="intro" id="intro">
            <div className="right">
                <div className="wrapper">
                    <h2>HELLO</h2>
                    <h1>I'm Jibu</h1>
                    <h3><span ref={textRef}>Web Developer</span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/white-down-arrow.png" color="white" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
