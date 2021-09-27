import React from "react";
import resumeFile from '../../assets/resume/resume.pdf';

function Resume() {
return(
    <section id="resume">
        <p>
            <h3>Technologies Known</h3>

            
        </p>
        <a href={resumeFile} target="_blank" rel="noreferrer">
            Download Resume
        </a>
    </section>
);
}
export default Resume;