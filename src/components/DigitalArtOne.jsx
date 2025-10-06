import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useLoader } from "@react-three/fiber";

const Cube = () => {
  // const ref = useRef();
  // useFrame((state, delta) => {
  //   ref.current.rotation.y += delta;
  //   ref.current.rotation.x += delta;
  //   ref.current.position.x = Math.sin(state.clock.elapsedTime) * 3.5;
  // });
  return (
    <>
      <mesh position={[-2, 0.45, -2.5]}>
        <boxGeometry args={[2, 1, 5]} />
        <meshStandardMaterial color={"#ffffff4f"} />
      </mesh>
    </>
  );
};

function PracticeModal() {
  const gltfOne = useLoader(GLTFLoader, "/model/practice.gltf");
  return <primitive object={gltfOne.scene} />;
}
const DigitalArtOne = () => {
  return (
    <div className="digitalArt-outter">
      <div>
        <Canvas camera={{ fov: 10, position: [-30, 4, 70] }}>
          <gridHelper args={[100, 100, "0x000000"]} />
          <directionalLight position={[0, 0, 4]} />
          <directionalLight position={[0, 4.5, -5.2]} />
          <PracticeModal />
          <Cube />
          <OrbitControls />
        </Canvas>
      </div>
      <div className="digitalArt-info">
        <h1>practice One</h1>
        <p>
          <strong>Digital Artwork</strong> - "The practice" collection, <br /> <br />
          by <strong>4AN0953</strong>
        </p>
      </div>
    </div>
  );
};

export default DigitalArtOne;
