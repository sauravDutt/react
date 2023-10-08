import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const ThreeScreen = () => {
    return(
        <>
            <ambientLight />
            <pointLight position={[5, 5, 5]}/>
            <pointLight position={[-3, -3, 2]}/>
            <OrbitControls/>
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