import React from 'react';
import "./project.css";

function Project() {
  
  return (

<section id="project">
        <div class="project">
            <figure class="proj1">
                <a href="https://sindhu-sp.github.io/run-buddy/">
                
                    <img src = {require('../../assets/runbuddy.png').default} class="project-photo" alt="Run Buddy page"/>
                    <figcaption>Run Buddy <h1>Run Buddy</h1>HTML CSS</figcaption>
                </a>
            </figure>
            <figure class="proj2">
                <a href="https://sindhu-sp.github.io/robot-gladiators/">
                    <img src={require('../../assets/robotgladiator.jpeg').default} class="project-photo" alt="Robot Gladiator page"/>
                    <figcaption>Robot Gladiator<h1>Javascript</h1></figcaption>
                </a>
            </figure>
            <figure class="proj3">

                <a href="https://sindhu-sp.github.io/Challenge1/">
                    <img src={require('../../assets/coderefractor.png').default} class="project-photo" alt="Code Refractor page"/>
                    <figcaption> <h1>Code Refactor</h1>HTML CSS</figcaption>
                </a>
            </figure>
            <figure class="proj4">

                <a href="https://deeparkrish.github.io/COVID-Tracker/">
                    <img src={require('../../assets/covidtracker.png').default} class="project-photo" alt="Covid Tracker page" width="200" height="300"/>
                    <figcaption>Covid Tracker <h1>HTML Javascript Bulma</h1></figcaption>
                </a>
            </figure>
        </div>
        </section>
  );}
export default Project;

