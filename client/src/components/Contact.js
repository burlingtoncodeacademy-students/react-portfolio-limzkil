import React from 'react'

export default function Contact (props) {

    const content = {
        width: "20vw",
        height: "auto",
        background: "white" ,
        padding: "3rem"
    }
    return (
        <div style = {content}><h2>Interested in chatting about my work? I can be reached at:</h2>
        <ul>
            <li>janngrover@gmail.com</li>
            <li>linkedIn that doesn't exist yet</li>
            <li>GitHub link</li>
            
            </ul></div>
    )
}