import React from 'react';
// import "../styles/About.css"
import "./Navbar";

const About = () => {
    return (
        <div>
            <section className="about" id="about">
                <div className="max-width">
                    <h2 className="title">About me</h2>
                    <div className="about-content">
                        <div className="column left">
                            <div className="profile-img">
                                <img src="assets\images\ori.jpeg" alt="Profile" />
                            </div>
                        </div>
                        <div className="column right">
                            <div className="text"> </div>
                            <p>As a graduate research assistant at Northeastern University and a master's student in computer science, I am passionate about innovation and problem-solving in the world of technology. I am constantly exploring emerging trends and seeking new challenges, with a focus on graph neural networks (GNN) and data engineering.

My journey includes impactful experiences in both academia and industry. In my role as an undergraduate research assistant at the Tata Institute of Fundamental Research, I developed a regression method based on GNN to predict electron energies. This project not only resulted in a publication in IEEE but also earned a runner-up award at Pradarshini 23, a national-level technical festival.

Furthermore, my four internships in software development have significantly contributed to my skill set. At ViaTech Media, I enhanced testing processes and designed UI components, boosting customer satisfaction and expanding the test suite. In roles at Techshots, AIM2EXCEL, and Matchbuddy, I contributed to the efficient match-making process by adding and optimizing features. Moreover, I made changes in UI using technologies such as FlutterFlow and Figma, and drove meaningful enhancements in the respective applications.

These diverse experiences reflect my commitment to staying at the forefront of technological advancements and applying my skills in real-world scenarios.</p>
                            <a href="https://drive.google.com/file/d/1ume8HxBBd7aQyZXeWYdhJCs9V0y0WVsy/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
