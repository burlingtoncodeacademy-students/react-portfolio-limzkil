import Contact from "./modal-content/Contact.js";
import About from "./modal-content/About.js";
import Art from "./modal-content/Art.js";
import Projects from "./modal-content/Projects.js";
import Career from "./modal-content/Career.js";

import React, { useState } from "react"
import { Modal, Button, Box, Typography } from "@material-ui/core";

import "../styles.css";

export default function ModalContain() {
  //controller for opening and closing the Contact modal
  const [openReach, setReach] = useState(false);

  const onOpenReach = () => setReach(true);
  const onCloseReach = () => setReach(false);

   //controller for opening and closing the About modal
  const [openAbout, setAbout] = useState(false);

  
  const onOpenAbout = () => setAbout(true);
  const onCloseAbout = () => setAbout(false);

   //controller for opening and closing the Art modal
  const [openArt, setArt] = useState(false);

  const onOpenArt = () => setArt(true);
  const onCloseArt = () => setArt(false);

   //controller for opening and closing the Projects modal
  const [openProjects, setProjects] = useState(false);

  const onOpenProjects = () => setProjects(true);
  const onCloseProjects = () => setProjects(false);

   //controller for opening and closing the Career modal
  const [openCareer, setCareer] = useState(false);

  const onOpenCareer = () => setCareer(true);
  const onCloseCareer = () => setCareer(false);

  const modalStyle = {
    position: 'absolute',
    top: '15vh',
    left: '10vw'
    

  }

  return (
    <>
     {/* div equivalent that holds the button to open the About modal */}
    <Box className = "modal-button-flex">
      <Box>
        <Button variant="contained" onClick={onOpenAbout}>about</Button>
        <Modal style={modalStyle} open={openAbout} onClose={onCloseAbout} center>
          <About />
        </Modal>
      </Box>
{/* div equivalent that holds the button to open the Art modal */}
      <Box>
        <Button variant="contained" onClick={onOpenArt}>art</Button>
        <Modal style={modalStyle} open={openArt} onClose={onCloseArt} center>
          <Art />
        </Modal>
      </Box>
{/* div equivalent that holds the button to open the Projects modal */}
      <Box>
        <Button variant="contained" onClick={onOpenProjects}>projects</Button>
        <Modal style={modalStyle} open={openProjects} onClose={onCloseProjects} center>
          <Projects />
        </Modal>
      </Box>
{/* div equivalent that holds the button to open the Career modal */}
      <Box>
        <Button variant="contained" onClick={onOpenCareer}>career</Button>
        <Modal style={modalStyle} open={openCareer} onClose={onCloseCareer} center>
          <Career />
        </Modal>
      </Box>
{/* div equivalent that holds the button to open the Contact modal */}
      <Box>
        <Button variant="contained" onClick={onOpenReach}>contact</Button>
        <Modal style={modalStyle} open={openReach} onClose={onCloseReach} center>
          <Contact />
        </Modal>
      </Box>
      </Box>

      <Box>
            <Typography variant = "subtitle2" style = {{paddingRight: "8vw", marginTop: "1vh"}}>reach out to janngrover@gmail.com. copyright @ MIT license. </Typography>
        </Box>
    </>
  );
}
