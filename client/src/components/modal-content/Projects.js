import React from 'react'

export default function Projects(props) {
    //styling object for the content of the modal
    const content = {
        width: "30rem",
        height: "40rem",
        background: "white",
        padding: "3rem",
      };
    return (
// content of the modal
        <div style = {content}><h2>A few of my projects</h2>
       <div>[small, representative image in line with text that will link to Github repo] A tic tac toe game themed around the idea of
           replacing your lawn with native plants in order to support the local ecosystem.
       </div>
       <br></br>
       <div>[small, representative image in line with text that will link to Github repo] An educational text adventure game based off my own knowledge
           and experience of being certified in Wilderness First Aid and living in the backcountry.
       </div>
       <br></br>
       <a href = "https://github.com/limzkil">My GitHub</a>
       </div>
       
    )

}