import { OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { Suspense } from "react";

const ReflectiveSphere = () => {

    const tweakableProperties = useControls({
        roughness: {value: 0.1, min: 0, max: 1},
        metalness: {value: 1, min: 0, max: 1},
    })

    return(
        <Sphere args={[1, 256, 256]}>
            <meshStandardMaterial {...tweakableProperties}/>
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
        <div className="golf-outter">
            <Suspense fallback={null}>
                <Canvas className="mainCanvas">
                    <ThreeScreen/>
                </Canvas>
            </Suspense>
        </div>
        
    );
}

export default Game;