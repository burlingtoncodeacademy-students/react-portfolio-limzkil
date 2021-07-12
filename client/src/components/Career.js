import React from 'react'

export default function Career(props) {
    const content = {
        width: "20vw",
        height: "auto",
        background: "white" ,
        padding: "3rem"
    }
    return (
        <div style = {content}><h2>My work so far:</h2>
        <a href = "" download>Download my resume</a>
        <p><h4>From 2020 to 2021:</h4>
            I was an LNA at UVMMC on the Neuro/surgery floor. Patient confidentiality means I can't share too much,
            but the care of vulnerable and ill people has forever changed my perspective of life. I have done some
            very difficult things over the course of my career, and this may have been the most.
        </p>
        <p>
            <h4>In the midst of pandemic times, I:</h4>
            Assisted with property management for my then-landlords.
            &emsp;<br></br>Was a dog handler for a sledding tour business.
            &emsp;<br></br>Freelanced writing SEO. 
        </p>
        <p>
            <h4>In the summer of 2019:</h4>
            I was part of a 20-strong crew living and working in the backcountry of Kings Canyon NP. 
            We cleared brush, moved big rocks, and kept wilderness access easy and open to all. 
        </p>
        <p>
            <h4>From 2017 to 2019:</h4>
            I was a native and restorative horticulturalist at Helix Environmental Planning Group. 
            I collected wild seed and cuttings, I maintained the irrigation at the nursery. I volunteered
            with the local chapter of the Native Plant Society in mapping out native populations.
            This is all a fancy way of saying that I grew local plants, kept them healthy, and saw them off
            to be planted in the ground they once abundantly populated. 
        </p>
           </div>
    )
}