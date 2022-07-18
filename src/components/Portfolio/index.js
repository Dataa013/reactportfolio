import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from '../../data/portfolio.json'
import portfolioDatas from '../../data/portfolios.json'


const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);
    const [portfolios, setPortfolios] = useState([]);


    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });


    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="boxing">
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <h4 className="description">{port.title}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    const renderPortfolios = (portfolios) => {
        return (
            <div className="images-container">
                {
                    portfolios.map((ports, idx) => {
                        return (
                            <div className="boxing">
                            <div className="image-box" key={idx}>
                                <img 
                                src={ports.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <h4 className="description">{ports.title}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(ports.url)}
                                    >View</button>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

   




    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"WebSites".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Javascript - React Js".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolios(portfolioDatas.portfolios)}</div>
            </div>
            
    
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;