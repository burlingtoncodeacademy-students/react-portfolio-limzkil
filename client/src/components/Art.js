import React from 'react'

export default function Art(props) {
    const content = {
        width: "20vw",
        height: "auto",
        background: "white" ,
        padding: "3rem"
    }
    return (
        <div style = {content}><h2>My art (that isn't a website)</h2>
        <p>I love symbols, and I love color, and I love staring for a long time to see if there's more to understand.
        </p>
            <div>This is where the carousel containing some sample artworks will go!</div>
           </div>
    )
}