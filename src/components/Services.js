import React from 'react'
// import "../styles/Services.css"
import "./Navbar"

const Services = () => {
    return (
        <>
            <section class="services" id="services">
                <div class="max-width">
                    <h2 class="title">My services</h2>
                    <div class="serv-content">
                        <div class="card">
                            <div class="box">
                                <i class="fas fa-laptop"></i>
                                <div class="text"> Machine Learning <br/></div>
                                <p>Creating robust and efficient solutions, with expertise in several programming languages,databases and web technologies.

</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="box">
                                <i class="fas fa-code"></i>
                                <div class="text">Full-Stack Development <br/></div>
                                <p>Making proficient implementation of machine learning algorithms, models, and data-driven insights. <br/></p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="box">
                                <i class="fas fa-chart-line"></i>
                                <div class="text">Data-Engineering<br/></div>
                                <p>Constructing and optimizing data pipelines, ensuring efficient data flow for insightful analysis and informed decision-making.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Services
