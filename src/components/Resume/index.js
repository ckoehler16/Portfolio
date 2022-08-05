import React from 'react';
import Footer from '../Footer';
import resume from '../../assets/Resume2-2022.pdf';

function Resume() {
    return (
        <section className='resume-section'>
            <h1 className='resume-header'>
                View and download my resume <a id='resume-link' href={resume}>here</a>
            </h1>
            <div className='resume-container'>
                <div className='list-container'>
                    <h2 className='list-header'>Front End Skills</h2>
                    <ul className='list'>
                        <li className='list-item'>HTML</li>
                        <li className='list-item'>CSS</li>
                        <li className='list-item'>JavaScript</li>
                        <li className='list-item'>React</li>
                        <li className='list-item'>JQuery</li>
                        <li className='list-item'>Bootstrap</li>
                        <li className='list-item'>Materialize</li>
                    </ul>
                </div>
                <div className='list-container'>
                    <h2 className='list-header'>Back End Skills</h2>
                    <ul className='list'>
                        <li className='list-item'>Node.js</li>
                        <li className='list-item'>Express.js</li>
                        <li className='list-item'>MongoDB</li>
                        <li className='list-item'>Mongoose</li>
                        <li className='list-item'>MySQL</li>
                        <li className='list-item'>Sequelize</li>
                        <li className='list-item'>Webpack</li>
                        <li className='list-item'>Handlebars</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Resume;