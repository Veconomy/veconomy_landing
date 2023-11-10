import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useRef } from "react";
import { extend, useFrame, useThree } from "react-three-fiber";

export const CameraControls = () => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls class.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
    extend({ OrbitControls });

    const {
      camera,
      gl: { domElement }
    } = useThree();
  
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();
    useFrame(state => controls.current.update());
    return (
      <orbitControls
        ref={controls}
        args={[camera, domElement]}
        enableZoom={false}

      />
    );
  };
  