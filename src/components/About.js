import React from "react";
import Links from "../components/Links";

function About(user) {
  const { bio } = user;

  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}
export default About;
