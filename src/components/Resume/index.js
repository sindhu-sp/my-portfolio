import React from "react";
import resumeFile from '../../assets/resume/resume.pdf';

function Resume() {
return(
    <section id="resume">
        <p>Technologies:</p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>REACT</li>
            <li>NODE</li>
        </ul>
        <a href={resumeFile} target="_blank" rel="noreferrer">
            Download Resume
        </a>
    </section>
);
}
export default Resume;