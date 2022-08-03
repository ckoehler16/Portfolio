import React from 'react';
import bistrobox from '../../assets/images/bistrobox.png';
import recipepantry from '../../assets/images/recipepantry.png';
import fluteandfork from '../../assets/images/fluteandfork.png';
import notetaker from '../../assets/images/notetaker.png';
import weather from '../../assets/images/weatheroutlook.png';
import quiz from '../../assets/images/timedquiz.png';
import Footer from '../Footer';

function Projects() {
    return (
        <>
            <div className='projects-page'>
                <h1 className="projects-header">Portfolio</h1>
                {/* <div className="intro-container">Click on an image to go to the project's live website.<br/> Click on the project's name to see the GitHub repository.</div> */}
                <div className="projects-container">
                    <div className="projects-section">
                        <div className="project-item">
                            <a className="project" id="project1" href="https://bistro-box.herokuapp.com/home">
                                <img className="image" src={bistrobox} alt="bistro-box" />
                            </a>
                            <a className="project-repo" href="https://github.com/charliebear2000/BistroBox">
                                BistroBox &emsp;<img src="https://img.icons8.com/3d-fluency/40/000000/3d-fluency-github-logo.png" alt="" />
                            </a>
                        </div>
                        <div className="project-item">
                            <a className="project" id="project2" href="https://shrouded-gorge-64455.herokuapp.com/">
                                <img className="image" src={recipepantry} alt="recipepantry" />
                            </a>
                            <a className="project-repo" href="https://github.com/charliebear2000/Food-andDrink-DB">
                                The Recipe Pantry &emsp;<img src="https://img.icons8.com/3d-fluency/40/000000/3d-fluency-github-logo.png" alt="" />
                            </a>
                        </div>
                        <div className="project-item">
                            <a className="project" id="project3" href="https://ckoehler16.github.io/Cocktail-Generator/">
                                <img className="image" src={fluteandfork} alt="fluteandfork" />
                            </a>
                            <a className="project-repo" href="https://github.com/ckoehler16/Cocktail-Generator">
                                Flute and Fork &emsp;<img src="https://img.icons8.com/3d-fluency/40/000000/3d-fluency-github-logo.png" alt="" />
                            </a>
                        </div>
                        <div className="project-item">
                            <a className="project" id="project4" href="https://note-taker71622.herokuapp.com/">
                                <img className="image" src={notetaker} alt="notetaker" />
                            </a>
                            <a className="project-repo" href="https://github.com/ckoehler16/note-taker">
                                Note Taker &emsp;<img src="https://img.icons8.com/3d-fluency/40/000000/3d-fluency-github-logo.png" alt="" />
                            </a>
                        </div>
                        <div className="project-item">
                            <a className="project" id="project5" href="https://ckoehler16.github.io/Weather-Outlook/">
                                <img className="image" src={weather} alt="weather" />
                            </a>
                            <a className="project-repo" href="https://github.com/ckoehler16/Weather-Outlook">
                                Weather Outlook &emsp;<img src="https://img.icons8.com/3d-fluency/40/000000/3d-fluency-github-logo.png" alt="" />
                            </a>
                        </div>
                        <div className="project-item">
                            <a className="project" id="project6" href="https://ckoehler16.github.io/Timed-Code-Quiz/">
                                <img className="image" src={quiz} alt="quiz" />
                            </a>
                            <a className="project-repo" href="https://github.com/ckoehler16/Timed-Code-Quiz">
                                Timed Quiz &emsp;<img src="https://img.icons8.com/3d-fluency/40/000000/3d-fluency-github-logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    );
}

export default Projects;