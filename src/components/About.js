import React from "react";
import user from "../data/user";
import Links from "./Links";

function About(props) {

  const bioPresent = props.bio ? props.bio : "";
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {bioPresent ? <p>{props.bio}</p> : ''}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links} linkedin={props.links2}/>
    </div>
  );
}

export default About;
