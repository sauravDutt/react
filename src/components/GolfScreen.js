import { Environment, OrbitControls, useEnvironment } from "@react-three/drei";
// import { useControls } from "leva";

// const ReflectiveSphere = () => {

//     // const tweakableProperties = useControls({
//     //     roughness: {value: 0.1, min: 0, max: 1},
//     //     metalness: {value: 1, min: 0, max: 1},
//     // })

//     return(
//         <Sphere args={[1, 256, 256]}>
//             <meshStandardMaterial roughness={0.1} metalness={1}/>
//         </Sphere>
//     )
// }

function GolfScreen() {
  const envMap = useEnvironment({ files: "/golf_course/golf.hdr" });

  return (
    <>
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <pointLight position={[-3, -3, 2]} />
      <OrbitControls />

      <Environment map={envMap} background />
      {/* <ReflectiveSphere/> */}
    </>
  );
}

export default GolfScreen;
