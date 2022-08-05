import React from 'react';
import Footer from '../Footer';
import image from '../../assets/images/profile2.jpeg';

function About() {
    return (
        <section className="about">
            <div className="about-content">
                <div className='title-div'>
                    <h1 className="about-title">About Me</h1>
                </div>
                <div className="about-container">
                    <div className="about-image">
                        <img id="me-image" src={image} alt="profile" />
                    </div>
                    <div className="about-text">
                        <p>
                            I'm a soon to be ex-hairstylist and a full-stack web developer with a passion for building beautiful, responsive websites.
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-icons">
                <Footer />
            </div>
        </section>
    );
}

export default About;