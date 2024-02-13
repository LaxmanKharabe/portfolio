import './aboutsections.css';
import React from "react";
const Personal = () => {
    const resumeUrl = "./resume/Laxman-Resume.pdf";

    return (
        <section className="personal-section">
            <div className="details">
                <h1 className="hedTxtx1">Laxman Kharabe</h1>
                <h2 className="hedTxt2">Frontend Developer</h2>
                <blockquote>
                    "Turning ideas into reality through elegant and efficient code."
                </blockquote>
                <a href={resumeUrl} download="Laxman_Kharabe_Resume.pdf">
                    <button className="btn btn-primary">Download Resume</button>
                </a>
            </div>

            <div className="links-container">
                <a href="https://github.com/LaxmanKharabe" className="github-icon hoverIcon">
                    <img src="./images/icons/github-icon-black.png" width="100" height="100" alt="github icon" />
                </a>
                <a href="mailto:laxman31097@gmail.com" className="gmail-icon hoverIcon">
                    <img src="./images/icons/twitter-icon-black.png" width="100" height="100" alt="gmail icon" />
                </a>
                <a href="https://www.linkedin.com/in/laxman-kharabe-linkdin" width="100" height="100" className="linnkdin-icon hoverIcon">
                    <img src="./images/icons/linkdin-icon-black.png" width="100" height="100" alt="linkdin icon" />
                </a>
            </div>
        </section>
    );
};

export default Personal;
