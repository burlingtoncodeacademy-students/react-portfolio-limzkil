import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { motion, AnimatePresence } from "framer-motion";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import Art from "./components/Art.js";
import Projects from "./components/Projects.js";
import Career from "./components/Career.js";
import { Earth } from "./components/earth";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import "./styles.css";

export default function App() {
  //styles for the container of the three.js canvas
  const Container = {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    
  };

  //modal controllers for all "pages"
  const [openReach, setReach] = useState(false);

  const onOpenReach = () => setReach(true);
  const onCloseReach = () => setReach(false);

  const [openAbout, setAbout] = useState(false);

  const onOpenAbout = () => setAbout(true);
  const onCloseAbout = () => setAbout(false);

  const [openArt, setArt] = useState(false);

  const onOpenArt = () => setArt(true);
  const onCloseArt = () => setArt(false);

  const [openProjects, setProjects] = useState(false);

  const onOpenProjects = () => setProjects(true);
  const onCloseProjects = () => setProjects(false);

  const [openCareer, setCareer] = useState(false);

  const onOpenCareer = () => setCareer(true);
  const onCloseCareer = () => setCareer(false);

  return (
    <div style={Container} className="App">

      {/* canvas is three.js container for 3D render */}

      
      <Canvas>
        <Suspense fallback="null">
          <Earth />
        </Suspense>
      </Canvas>
      

      {/* main content div placed over 3D render */}
      <div className="landing-box">
        <h1>Hello, world.</h1>
        <p>My name is Julie Grover.</p>
        <p>I am a web developer.</p>

        {/* placing all modal buttons in a flex box */}
        <div className="modal-button-flex">

        {/* respective modal buttons  */}
          <div>
            <button onClick={onOpenAbout}>about</button>
            <Modal open={openAbout} onClose={onCloseAbout} center>
              <About />
            </Modal>
          </div>

          <div>
            <button onClick={onOpenArt}>art</button>
            <Modal open={openArt} onClose={onCloseArt} center>
              <Art />
            </Modal>
          </div>

          <div>
            <button onClick={onOpenProjects}>projects</button>
            <Modal open={openProjects} onClose={onCloseProjects} center>
              <Projects />
            </Modal>
          </div>

          <div>
            <button onClick={onOpenCareer}>career</button>
            <Modal open={openCareer} onClose={onCloseCareer} center>
              <Career />
            </Modal>
          </div>

          <div>
            <button onClick={onOpenReach}>contact</button>
            <Modal open={openReach} onClose={onCloseReach} center>
              <Contact />
            </Modal>
          </div>
        </div>
      <footer>Reach out to janngrover@gmail.com with any questions, complaints, or delights. Credit for Earth textures to JHT's Planetary Pixel Emporium.</footer>
      </div>
    </div>
  );
}
