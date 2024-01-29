import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Cube = () => {
  // const ref = useRef();
  // useFrame((state, delta) => {
  //   ref.current.rotation.y += delta;
  //   ref.current.rotation.x += delta;
  //   ref.current.position.x = Math.sin(state.clock.elapsedTime) * 3.5;
  // });
  return (
    <>
      <mesh position={[-1, 0.75, -1.54]}>
        <boxGeometry args={[1, 1.5, 2]} />
        <meshStandardMaterial color={"#ffffff4f"} />
      </mesh>
    </>
  );
};
const CubeTwo = () => {
  // const ref = useRef();
  // useFrame((state, delta) => {
  //   ref.current.rotation.y += delta;
  //   ref.current.rotation.x += delta / 2;
  //   ref.current.position.x = Math.sin(state.clock.elapsedTime) * 3.5;
  // });
  return (
    <>
      <mesh position={[0, 4, -4]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"#ffffff4f"} />
      </mesh>
    </>
  );
};
function ModelContent() {
  const gltf = useLoader(GLTFLoader, "/model/practice.gltf");
  return <primitive object={gltf.scene} />;
}

const GtownMap = () => {
  return (
    <>
      <Canvas camera={{ fov: 10, position: [0, 1, 32] }}>
        <gridHelper args={[100, 100, "0x000000"]} />
        <directionalLight position={[0, 0, 4]} />
        <directionalLight position={[0, 0, 4]} />
        <ambientLight />
        <ModelContent />
        <Cube />
        <CubeTwo />
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default GtownMap;
