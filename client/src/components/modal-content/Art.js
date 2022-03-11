import React from 'react'

export default function Art(props) {
     //styling object for the content of the modal
    const content = {
        width: "30rem",
        height: "40rem",
        background: "white",
        padding: "3rem",
      };
    return (
        // content of the modal
        <div style = {content}><h2>My art (that isn't a website)</h2>
        <p>I love symbols, and I love color, and I love staring for a long time to see if there's more to understand.
        </p>
            <div>This is where a gallery containing images of my art will go!</div>
           </div>
    )
}