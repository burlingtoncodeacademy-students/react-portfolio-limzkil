import React from "react";

export default function About(props) {
  const content = {
    width: "20vw",
    height: "auto",
    background: "white",
    padding: "3rem",
  };
  return (
    <div style={content}>
      <h2>Who am I?</h2>
      <p>
        I've said I'm a web developer. But I am also a green thumb, a dirty
        hippie, an overthinker, and an artist. The utility and presence of
        technology in our lives in undeniable now and only continues to grow. I
        want to be involved in seeing that technology utilized for the good of
        this Earth and its inhabitants.
        <br></br>
        <br></br>
        It might seem silly, but I believe a beautiful, responsive website is
        one piece of that movement.
        <br></br>
        <br></br>
        When not at a screen, I can be found hiking, running, gardening,
        wandering galleries, and road tripping in an effort to see if there is
        anything the Internet has missed. I have a long history as a volunteer,
        so you might find me out somewhere giving a helping hand, too. 
        <br></br>
        <br></br> 
        Whether it's backpacking mulch to a primitive latrine or
        picking up trash for Green Up Day, I'm there.
      </p>
    </div>
  );
}
