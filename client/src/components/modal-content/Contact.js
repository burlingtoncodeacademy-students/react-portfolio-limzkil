import React from 'react'

import { Typography } from '@material-ui/core'

export default function Contact (props) {
//styling object for the content of the modal
    const content = {
        width: "30rem",
        height: "40rem",
        background: "white",
        padding: "3rem",
        bodyFont: {
            fontSize: "1rem"
        }
      };
    return (
        // content of the modal
        <div style = {content}><Typography variant = "h5">Interested in knowing more?</Typography>
        <ul style = {content.bodyFont}>
            <li>Email me at janngrover@gmail.com.</li>
            <li><a href = "https://www.linkedin.com/in/julie-grover-87323521a/">Connect with me on LinkedIn.</a></li>
            <li><a href = "https://github.com/limzkil">See what I'm getting up to on GitHub.</a></li>
            
            </ul></div>
    )
}