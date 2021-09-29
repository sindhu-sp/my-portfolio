import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";


function About() {
  return (
    <section className="my-5" id="about">
  <h1>Who am I?</h1>
  <div>
  <img src={coverImage} className="my-2" style={{ width: "100px" , height: "100px"}} alt="cover" />
  </div>
  <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit
                anim id est laborum.
     </p>  
</section>
  );
}

export default About;

