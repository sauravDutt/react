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
                    <h1>Golf ⛳<br/>joint card for Handicapping</h1>
                    <p>
                        Mark your strokes after every hole.
                        <br/><span>** The users will have to save a Golf Corse first (enter PAR and Yards for every hole), or can select one from their saved courses, before playing the game.</span>
                    </p>
                </div>
            </div>
            <div className="golfCourse-btn-outter">
                <button>Save a course</button>
                <button>Saved courses</button>
            </div>
            
        </div>);
}

export default Game;