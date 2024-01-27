import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const GtownMap = () => {
  return (
    <>
      <Canvas camera={{ fov: 10, position: [0.5, 5, 20] }}>
        <gridHelper args={[100, 100, "0xff0000"]} />
        <directionalLight position={[0, 0, 4]} />
        <ambientLight />

        <OrbitControls />
      </Canvas>
    </>
  );
};

export default GtownMap;
