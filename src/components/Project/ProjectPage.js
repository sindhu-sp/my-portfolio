import React from 'react';
import Project from './Project'
import runBuddy from '../../assets/runbuddy.png'
import robotGladiator from '../../assets/robotgladiator.jpeg'
import codeRefractor from '../../assets/coderefractor.png'
import covidTracker from '../../assets/covidtracker.png'
import blog from '../../assets/blog.jpg'
import noteTaker from '../../assets/note_taker.png'


function ProjectPage() {
  
  return (

<section id="project">
        <div className="project">
        <Project 
            siteUrl={"https://sindhu-sp.github.io/run-buddy/"}
            githubLink={"https://github.com/sindhu-sp/run-buddy"}
            projectName={"Run Buddy"}
            imgSrc={runBuddy}
            grid={"proj1"}
        />    
        <Project 
            siteUrl={"https://sindhu-sp.github.io/robot-gladiator/"}
            githubLink={"https://github.com/sindhu-sp/robot-gladaitor"}
            projectName={"Robot Gladiator"}
            imgSrc={robotGladiator}
            grid={"proj2"}
        />    
        <Project 
            siteUrl={"https://sindhu-sp.github.io/Challenge1/"}
            githubLink={"https://github.com/sindhu-sp/Challenge1"}
            projectName={"Code Refractor"}
            imgSrc={codeRefractor}
            grid={"proj3"}
        />    
        <Project 
            siteUrl={"https://sindhu-sp.github.io/COVID-Tracker/"}
            githubLink={"https://github.com/sindhu-sp/COVID-Tracker"}
            projectName={"Covid Tracker"}
            imgSrc={covidTracker}
            grid={"proj4"}
        />    
        <Project 
            siteUrl={"https://sindhu-techblog.herokuapp.com/"}
            githubLink={"https://github.com/sindhu-sp/blog"}
            projectName={"Tech Blog"}
            imgSrc={blog}
            grid={"proj5"}
        />    
        <Project 
            siteUrl={"https://notetaker-sindhu.herokuapp.com/"}
            githubLink={"https://github.com/sindhu-sp/Note_Taker"}
            projectName={"Note Taker"}
            imgSrc={noteTaker}
            grid={"proj6"}
        />    
         </div>
        </section>
  );}
export default ProjectPage;

