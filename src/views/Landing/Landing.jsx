import React from "react";
import Animation from "./Animation.jsx";
import './Landing.scss';

function Landing(){
  return(
    <div style={{height:"100vh", paddingTop: "124px", paddingBottom: "20px"}}>
      <section id="text">
        <h1>Enabling Growth.</h1>
        <h1>Creating Value.</h1>
        <p>Seeking opportunities in early stage Esports, Sports & Entertainment Technologies</p>
        <button>Let's Talk</button>
      </section>
      <Animation height={600} width={800}/>
    </div>
  )
}

export default Landing;
