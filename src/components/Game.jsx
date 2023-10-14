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
                        <br/><span>** The users will have to enter PAR and Yards for every hole before playing their round.</span>
                    </p>
                </div>
            </div>
            <p className="littleInfo">** The following is just a simple ledgure of your game.</p>
            <div className="handicapping-table-outter">

            </div>
            
        </div>);
}

export default Game;