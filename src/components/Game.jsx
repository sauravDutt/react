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
                    <h1>Golf ⛳ Joint card for Handicapping</h1>
                    <p>
                        This is a simple application built to calculate Handicap and keep scores.
                        <br/><sub>* The users will have to enter <strong>PAR</strong> and <strong>yards</strong> for every hole, before playing the game.</sub>
                    </p>
                </div>
            </div>
            
        </div>);
}

export default Game;