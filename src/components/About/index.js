import React from 'react';
import Footer from '../Footer';

function About() {
    return (
        <section className="about">
            <div className="about-content">
                <div>
                    <h1 className="about-title">About Me</h1>
                </div>
                <div className="about-text">
                    <p>
                        I'm a full-stack web developer with a passion for building beautiful, responsive websites.
                    </p>
                </div>
            </div>
            <div className="footer-icons">
                <Footer />
            </div>
        </section>
    );
}

export default About;