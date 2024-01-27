import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Cube = () => {
  // const ref = useRef();
  // useFrame((state, delta) => {
  //   ref.current.rotation.y += delta;
  //   ref.current.rotation.x += delta;
  //   ref.current.position.x = Math.sin(state.clock.elapsedTime) * 3.5;
  // });
  return (
    <>
      <mesh position={[-1.5, 0.48, 0]}>
        <boxGeometry args={[1, 1, 1]} />
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
      <mesh position={[1.5, 0.98, 0]}>
        <boxGeometry args={[1, 2, 1]} />
        <meshStandardMaterial color={"#ffffff4f"} />
      </mesh>
    </>
  );
};

const GtownMap = () => {
  return (
    <>
      <Canvas camera={{ fov: 10, position: [0.5, 5, 20] }}>
        <gridHelper args={[100, 100, "0x000000"]} />
        <directionalLight position={[0, 0, 4]} />
        <ambientLight />

        <Cube />
        <CubeTwo />
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default GtownMap;
