import React, { useState } from 'react'
import "./Navbar"
import "./Home"
import emailjs from 'emailjs-com';

const Contact = () => {

    const [userData, setUserData] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: ""
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };

    // Connect with Firebase
    const submitData = async (event) => {
        event.preventDefault();
        const { fullName, email, subject, message } = userData;
        if (fullName && email && subject && message) {
            try {
                const templateParams = {
                    fullName,
                    email,
                    subject,
                    message,
                };
    
                await emailjs.send(
                    'service_zdxdvno',  // Replace with your service ID
                    'template_6ppxdhp', // Replace with your template ID
                    templateParams,
                    'aumJD2Ze_NaOnzsMn'      // Replace with your user ID
                );
    
                setUserData({
                    fullName: "",
                    email: "",
                    subject: "",
                    message: "",
                });
    
                alert("Email sent successfully!");
            } catch (error) {
                console.error("Error sending email:", error);
                alert("Failed to send email. Please try again later.");
            }
        } else {
            alert("Please fill in all the data");
        }
    };
    




    return (
        <>

            <section class="contact" id="contact">
                <div class="max-width">
                    <h2 class="title">Contact me</h2>
                    <div class="contact-content">
                        <div class="column left">
                            <div class="text">Get in Touch</div>
                            <p></p>
                            <div class="icons">
                                <div class="row">
                                    <i class="fas fa-user"></i>
                                    <div class="info">
                                        <div class="head">Name</div>
                                        <div class="sub-title">Orijeet Mukherjee</div>
                                    </div>
                                </div>

                                <div class="row">
                                    <i class="fas fa-envelope"></i>
                                    <div class="info">
                                        <div class="head">Email</div>
                                        <a href="https://mail.google.com/" target="_blank" class="sub-title">mukherjee.o@northeastern.edu</a>
                                    </div>
                                </div>

                                <div className="row">
                                    <i class="fab fa-linkedin"></i>
                                    <div className="info">
                                        <a href="https://www.linkedin.com/in/orijeet-mukherjee/" target="_blank" >
                                        <div className="head">LinkedIn Profile</div>

                                        </a>
                                    </div>
                                </div>
                                
                            

                            </div>
                        </div>
                        <div class="column right">
                            <div class="text">Message me</div>
                            <form method="POST">
                                <div class="fields">
                                    <div class="field name">
                                        <input type="text" placeholder="Full Name" required
                                            name="fullName"
                                            value={userData.fullName}
                                            onChange={postUserData}
                                        />
                                    </div>
                                    <div class="field email">
                                        <input type="email" placeholder="Email" required
                                            name="email"
                                            value={userData.email}
                                            onChange={postUserData}
                                        />
                                    </div>
                                </div>
                                <div class="field">
                                    <input type="text" placeholder="Subject" required
                                        name="subject"
                                        value={userData.subject}
                                        onChange={postUserData}
                                    />
                                </div>
                                <div class="field textarea">
                                    <textarea cols="30" rows="10" placeholder="Message.." required
                                        name="message"
                                        value={userData.message}
                                        onChange={postUserData}
                                    ></textarea>
                                </div>
                                <div class="button-area">
                                    <button type="submit" onClick={submitData}>Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


export default Contact
