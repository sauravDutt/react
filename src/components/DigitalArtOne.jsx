import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useLoader } from "@react-three/fiber";

function PracticeModal() {
  const gltfOne = useLoader(GLTFLoader, "/model/practice.gltf");
  return <primitive object={gltfOne.scene} />;
}
const DigitalArtOne = () => {
  return (
    <div className="digitalArt-outter">
      <div>
        <Canvas camera={{ fov: 20, position: [7, 10, -20] }}>
          <gridHelper args={[50, 50, "0x000000"]} />
          <directionalLight position={[0, 0, 4]} />
          <directionalLight position={[0, 4.5, -5.2]} />
          <PracticeModal />
          <OrbitControls />
        </Canvas>
      </div>
      <div className="digitalArt-info">
        <h1>practice</h1>
        <p>
          <strong>Digital Artwork</strong> - "The practice" collection, <br />
          by <i>Skank Hunt</i>
        </p>
      </div>
    </div>
  );
};

export default DigitalArtOne;
