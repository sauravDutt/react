import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Game = () => {
    return(
        <Suspense fallback={null}>
            <Canvas className="mainCanvas">

            </Canvas>
        </Suspense>
    );
}

export default Game;