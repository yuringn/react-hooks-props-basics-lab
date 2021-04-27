import React from "react";
import Link from "./Links"

function About(props) {
  // console.log(props)
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio != "" ? <p>{props.bio}</p> : null }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Link github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;
