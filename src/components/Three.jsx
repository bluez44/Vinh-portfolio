import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF(
    "models/pengu_3d_model_-_league_of_legends_fanart.glb"
  );
  return <primitive object={scene} {...props} />;
}

function Three() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div
      id="canvas_container"
      className="flex w-[1000px] h-[500px] justify-center absolute left-1/2 top-1/3 lg:top-1/2 transform -translate-1/2"
    >
      <Canvas
        camera={{
          position: [0, 50, 60],
          fov: 100,
        }}
      >
        <Suspense fallback={null}>
          <Model scale={isMobile ? 0.5 : 1} position={[0, 0, 0]} />
          <OrbitControls autoRotate enableZoom={false} />
        </Suspense>

        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
      </Canvas>
    </div>
  );
}

export default Three;
