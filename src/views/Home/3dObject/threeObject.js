import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader, useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three-stdlib/loaders/OBJLoader';

function ThreeDObject() {
  const group = useRef();

  // Carga tu modelo 3D aquí (asegúrate de tener un archivo .obj en la ruta correcta)
  const { nodes } = useLoader(OBJLoader, '../../../assets/earth.obj');

  useFrame(() => {
    group.current.rotation.x += 0.005;
    group.current.rotation.y += 0.005;
  });

  return (
    <group ref={group}>
      <primitive object={nodes.yourModelObjectName} />
    </group>
  );
}

export default ThreeDObject;
