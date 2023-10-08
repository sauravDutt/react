import { OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const ReflectiveSphere = () => {
    return(
        <Sphere args={[1, 256, 256]}>
            <meshStandardMaterial/>
        </Sphere>
    )
}

function ThreeScreen () {
    return(
        <>
            <ambientLight />
            <pointLight position={[5, 5, 5]}/>
            <pointLight position={[-3, -3, 2]}/>
            <OrbitControls/>

            <ReflectiveSphere/>
        </>
    );
}

const Game = ()=> {
    return(
        <Suspense fallback={null}>
            <Canvas className="mainCanvas">
                <ThreeScreen/>
            </Canvas>
        </Suspense>
    );
}

export default Game;