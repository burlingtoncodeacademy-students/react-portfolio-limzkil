//.css file that holds styling for the main landing page
import "../styles.css";

import React from "react"
import { Typography, CssBaseline, } from '@material-ui/core'

export default function Landing () {
    //landing page text
    return (
        <>
        <CssBaseline />
        <Typography variant="h1">Hello, world.</Typography>
        <Typography variant="h2">My name is Julie Grover.</Typography>
        <Typography variant = "h3">I am a web developer.</Typography>

        </>
    )
}