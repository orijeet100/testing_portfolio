import React from 'react';
// import "../styles/Skills.css"
import "./Navbar";

const Skills = () => {
    return (
        <>
            <section className="skills" id="skills">
                <div className="max-width">
                    <h2 className="title">My skills</h2>
                    <div className="skills-content">
                        <div className="column left">
                            {/* <div className="text">My creative skills & experiences.</div> */}
                        </div>
                        <div className="column right">
                            <div className="bars">
                                <div className="info">
                                    <span>Java</span>
                                    <span>95%</span>
                                </div>
                                <div className="line java"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Python</span>
                                    <span>95%</span>
                                </div>
                                <div className="line java"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>JavaScript</span>
                                    <span>80%</span>
                                </div>
                                <div className="line js"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>React JS</span>
                                    <span>75%</span>
                                </div>
                                <div className="line reactjs"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Machine Learning</span>
                                    <span>90%</span>
                                </div>
                                <div className="line ml"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Neural Network</span>
                                    <span>90%</span>
                                </div>
                                <div className="line nn"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>C/C++</span>
                                    <span>80%</span>
                                </div>
                                <div className="line cpp"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Flutter</span>
                                    <span>95%</span>
                                </div>
                                <div className="line flutter"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Dart</span>
                                    <span>90%</span>
                                </div>
                                <div className="line dart"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Data Analysis</span>
                                    <span>95%</span>
                                </div>
                                <div className="line analysis"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Data Visualization</span>
                                    <span>95%</span>
                                </div>
                                <div className="line visualization"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>MongoDB</span>
                                    <span>75%</span>
                                </div>
                                <div className="line mongodb"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>MySQL</span>
                                    <span>90%</span>
                                </div>
                                <div className="line mysql"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>GitHub</span>
                                    <span>95%</span>
                                </div>
                                <div className="line git"></div>
                            </div>
                            {/* Add more skills as needed */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
