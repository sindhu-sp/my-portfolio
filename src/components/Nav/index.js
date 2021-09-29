import React from 'react';
import sound from '../../assets/sound.wav'

function Nav({setCurrentPage}) {

    const clickSound = new Audio(sound);

    function playSound() {
        clickSound.play()
    }

    return(<nav>
     <ul>
         <li >
             <a href="#about"
                 onClick = {() => {
                    setCurrentPage('about');
                    playSound();
                 }
                 }>
             About: 
             </a>
         </li>
         <li >
             <a href="#contact"
                 onClick = {() => {
                     setCurrentPage('contact');
                     playSound();
                 }
                }>
             Contact: 
             </a>
         </li>
         <li >
             <a href="#resume"
                 onClick = {() => {
                     setCurrentPage('resume');
                     playSound();
                 }
                }>
             Resume: 
             </a>
         </li>
         <li >
             <a href="#project"
                 onClick = {() => {
                     setCurrentPage('project');
                     playSound();
                 }
                }>
             Project: 
             </a>
         </li>
         
     </ul>

    </nav>);
}
export default Nav;