import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { Box, CssBaseline, Grid,  } from "@material-ui/core";


import "./styles.css";
import Landing from "./components/Landing.js";
import ModalContain from "./components/ModalContain.js";
import { Scene } from "./components/scene";

export default function App() {

  return (
    //insert CssBaseline to reset styling
    <>
      <CssBaseline />
      <Box>
        {/* canvas is three.js container for 3D render */}
        <Canvas style={{ height: '100vh', width: '100vw' }}>
          <Suspense fallback="null">
            <Scene />
          </Suspense>
        </Canvas>
      </Box>
    
     
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        className="landing-box"
      >
        {/* xs, s, etc props refer to various screen size breakpoints to change the size of the columns in the Grid */}
        <Grid item xs={9} s={6} md = {6} lg = {4} xl = {2} zeroMinWidth>
          <Landing />
        </Grid>

        <Grid item xs={3} s={4} md = {4} lg = {4} xl = {10} zeroMinWidth>
          <ModalContain />
        </Grid>
      </Grid>
    
    </>
  );
}
