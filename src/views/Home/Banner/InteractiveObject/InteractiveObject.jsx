import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Fragment } from "react";
export const InteractiveObject = () => {
  const [gltf, setGltf] = useState(null);

  const objectRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("/earth2.glb?v=" + Date.now(), (loadedGltf) => {
      setGltf(loadedGltf);
    });
  }, []);

  // Definir la función de actualización para la rotación
  useFrame(() => {
    if (objectRef.current) {
      objectRef.current.rotation.y += 0.001; // Ajusta la velocidad de rotación según tus preferencias
      objectRef.current.rotation.x += 0.001; // Ajusta la velocidad de rotación según tus preferencias
    }
  });

  return (
    <Fragment>
      <ambientLight intensity={.5} />
      {gltf && (
        <primitive
          ref={objectRef}
          scale={[3.5, 3.5, 3.5]}
          object={gltf.scene}
        />
      )}

    </Fragment>
  );
};
