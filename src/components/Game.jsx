import { Canvas } from "@react-three/fiber";
import GolfScreen from "./GolfScreen";


const Game = ()=> {
    return(
        <div className="game-section">
            <div className="grid-two-part">
                <div className="window">
                    <div className="golf-outter">
                        <Canvas className="mainCanvas">
                            <GolfScreen/>
                        </Canvas>
                    </div>
                </div>
                <div className="info">
                    <h1>Golf ⛳</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
            </div>
            
        </div>);
}

export default Game;