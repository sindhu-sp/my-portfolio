import React from 'react';


function Project(props) {
  return (
    <figure className={props.grid}>
        <a href={props.siteUrl}>
            <img src = {props.imgSrc} className="project-photo" alt={props.projectName}/>
        </a>
        <div className="flex-row">
        <figcaption><h1>{props.projectName}</h1></figcaption>
        <a href={props.githubLink} title="Github-Link">Github</a>
        </div>
    </figure>
  )
}

export default Project;

