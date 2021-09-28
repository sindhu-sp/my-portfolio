import React from 'react';
import photos from './photolist';

function Project() {
  
  return (
    <section>
          <div className="project" id ="project">
            <h2 className="title"><i>Projects</i></h2>
            <hr></hr>
          </div>

         
           {photos.map((project) => (
          // add imp tag and display project image and add links to GitHub 
            <div name={project.name} imgurl ={project.imgurl} githuburl={project.githuburl} deployUrl={project.deployurl} topics={project.topics}/>
  ))}
  
  </section>
  )};
export default Project;

