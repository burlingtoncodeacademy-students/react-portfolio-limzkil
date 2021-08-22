import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Stars } from "@react-three/drei";




import EarthDayMap from "../../textures/8081_earthmap4k.jpg";
import EarthBumpMap from "../../textures/8081_earthbump4k.jpg";
import EarthSpecularMap from "../../textures/8081_earthspec4k.jpg";



//exporting earth mesh and associated clouds and Stars skybox
export function Scene(prop) {

  //loading textures into referable array
  const [colorMap, bumpMap, specularMap] = useLoader(TextureLoader, [
    EarthDayMap,
    EarthBumpMap,
    EarthSpecularMap,
    
  ]);

  //setting up references for earth and clouds
  const earthRef = useRef();
  

  //setting the rotation of the earth and clouds to elapsed time divided by 10
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 10;
    // cloudsRef.current.rotation.y = elapsedTime / 10;
  });


  return (
    <>
    {/* setting up pointLight to act as the sun illuminating the Earth */}
      <pointLight color ="#f6f3ea" position = {[1, 0, 10]} intensity = {1} />
      {/* setting up Stars skybox for Earth */}
      <Stars
        radius={300}
        depth={50}
        count={20000}
        factor={7}
        saturation={1}
        fade={true}
      />
      {/* creating the Earth 3D object */}
      <mesh ref={earthRef} position={[1, 0, 4]}>
        {/* defining Earth shape on multiple axis */}
        <sphereGeometry args={[1, 32, 32]} />
        {/* setting the phongMaterial to imported specular map */}
        <meshPhongMaterial specularMap={specularMap} />
        {/* setting the standard material to the imported color map, adding the imported bump map
        and setting the Earth's "metalness" (shininess-related) and "roughness" (more shininess-related) */}
        <meshStandardMaterial map={colorMap} bumpMap={bumpMap} metalness= {0.4} roughness ={0.7} />
      </mesh>


    </>
  );
}
