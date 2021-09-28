import React from 'react';
function Nav({setCurrentPage}) {
    return(<nav>
     <ul>
         <li >
             <a href="#about"
                 onClick = {() => setCurrentPage('about')}>
             About: 
             </a>
         </li>
         <li >
             <a href="#contact"
                 onClick = {() => setCurrentPage('contact')}>
             Contact: 
             </a>
         </li>
         <li >
             <a href="#resume"
                 onClick = {() => setCurrentPage('resume')}>
             Resume: 
             </a>
         </li>
         <li >
             <a href="#project"
                 onClick = {() => setCurrentPage('project')}>
             Project: 
             </a>
         </li>
         
     </ul>

    </nav>);
}
export default Nav;