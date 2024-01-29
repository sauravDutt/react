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
      <mesh position={[-2, 0.45, -2.5]}>
        <boxGeometry args={[2, 1, 5]} />
        <meshStandardMaterial color={"#ffffff4f"} />
      </mesh>
    </>
  );
};
// const CubeTwo = () => {
//   // const ref = useRef();
//   // useFrame((state, delta) => {
//   //   ref.current.rotation.y += delta;
//   //   ref.current.rotation.x += delta / 2;
//   //   ref.current.position.x = Math.sin(state.clock.elapsedTime) * 3.5;
//   // });
//   return (
//     <>
//       <mesh position={[0, 4.5, -5.2]}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color={"#ffffff4f"} />
//       </mesh>
//     </>
//   );
// };
function ModelContent() {
  const gltf = useLoader(GLTFLoader, "/model/practice.gltf");
  return <primitive object={gltf.scene} />;
}

const GtownMap = () => {
  return (
    <>
      <Canvas camera={{ fov: 10, position: [20, 35, 75] }}>
        <gridHelper args={[100, 100, "0x000000"]} />
        <directionalLight position={[0, 0, 4]} />
        <directionalLight position={[0, 4.5, -5.2]} />
        <ambientLight />
        <ModelContent />
        <Cube />
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default GtownMap;
