import React, { useEffect, useState } from 'react'

import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList.jsx";
import {webPortfolio,dataengineeringPortfolio}
from "../../dummydata.js";

function Portfolio() {
    const [selected,setSelected] = useState("web");
    const [data,setData] = useState([]);
    const list =[
        // {
        //     id:"featured",
        //     title:"Featured"
        // },
        {
            id:"web",
            title:"Responsive Web App"
        },
        {
            id:"dataengineering",
            title:"Data Engineering"
        },
    ]

    useEffect(()=>{
        switch (selected){
            case "web":
                setData(webPortfolio);
                break;
            case "dataengineering":
                setData(dataengineeringPortfolio);
                break;
            default:
                setData(webPortfolio);
                break;

        }
    },[selected]);

    
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList key={item.id} id ={item.id} title={item.title} 
                    active={selected === item.id}
                    setSelected ={setSelected}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map( (item) => (
                    <a  key={item.id} href={item.link} rel="noreferrer"
                            target="_blank">
                        <div className="item">
                            <img src={item.img} alt="" />
                            <h3>{item.title}</h3>
                        </div>
                    </a>
                ))}
            </div>
            
        </div>
    )
}

export default Portfolio
