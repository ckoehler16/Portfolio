import React from 'react';
import linkedin from '../../assets/images/linkedin40.png';

function Footer() {
    return (
        <footer>
            <div className="footer-div">
                <a className="footer-link" href="https://github.com/ckoehler16"><img src="https://img.icons8.com/3d-fluency/40/000000/3d-fluency-github-logo.png" alt="" /></a>
                <a className="footer-link" href="https://www.linkedin.com/in/courtney-koehler-979050232/"><img src={linkedin} alt="" /></a>
            </div>
            <div className="attributes">
                <a href="https://www.flaticon.com/free-icons/ecology-and-environment" title="ecology and environment icons">Icons created by O.moonstd</a>
            </div>
        </footer>
    );
}

export default Footer;