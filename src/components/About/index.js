import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";
// import backgroundImage from "../../assets/background/background-image.jpg";

function About() {
  return (
    <section className="my-5" id="about">
  <h1>Who am I?</h1>
  <div>
  <img src={coverImage} className="my-2" style={{ width: "50px" , height: "100px"}} alt="cover" />
  </div>
  <p>
    lorem ipsum dolor sit amet, consectetur adip
    </p>  
</section>
  );
}

export default About;

